// src/pdf/dibujarTabla.ts
import { PDFDocument, PDFPage, PDFFont, rgb } from "pdf-lib";
import { ALTO_FILA, FUENTES, PAGINA_DC97 } from "./layout";

export interface ColumnaTabla {
  label: string;
  key: string;
  ancho: number; // en puntos, proporcional al ancho de contenido
}

export interface FilaTabla {
  [key: string]: string;
}

interface EstadoDibujo {
  doc: PDFDocument;
  font: PDFFont;
  fontBold: PDFFont;
  pagina: PDFPage;
  y: number;
}

const margen = 36;
const anchoPagina = PAGINA_DC97.ancho;
const altoPagina = PAGINA_DC97.alto;
const fuenteTabla = FUENTES.tablaTexto;
const fuenteLabel = FUENTES.tablaHeader;
const altoFilaTabla = ALTO_FILA;
const altoFilaHeader = 12;
const anchoContenido = anchoPagina - margen * 2;

function nuevaPagina(doc: PDFDocument): PDFPage {
  const pagina = doc.addPage([anchoPagina, altoPagina]);
  return pagina;
}

function dibujarEncabezadoColumnas(
  pagina: PDFPage,
  font: PDFFont,
  columnas: ColumnaTabla[],
  y: number
) {
  let x = margen;
  pagina.drawRectangle({
    x: margen,
    y: y - altoFilaHeader,
    width: anchoContenido,
    height: altoFilaHeader,
    color: rgb(0.85, 0.85, 0.85),
  });
  for (const col of columnas) {
    pagina.drawText(col.label, {
      x: x + 3,
      y: y - altoFilaHeader + 6,
      size: fuenteLabel,
      font,
      color: rgb(0, 0, 0),
    });
    pagina.drawRectangle({
      x,
      y: y - altoFilaHeader,
      width: col.ancho,
      height: altoFilaHeader,
      borderColor: rgb(0.3, 0.3, 0.3),
      borderWidth: 0.5,
    });
    x += col.ancho;
  }
}

function truncar(font: PDFFont, texto: string, size: number, anchoDisponible: number) {
  let t = texto;
  while (font.widthOfTextAtSize(t, size) > anchoDisponible && t.length > 1) {
    t = t.slice(0, -1);
  }
  return t;
}

function dibujarFila(
  pagina: PDFPage,
  font: PDFFont,
  columnas: ColumnaTabla[],
  fila: FilaTabla,
  y: number
) {
  let x = margen;
  for (const col of columnas) {
    pagina.drawRectangle({
      x,
      y: y - altoFilaTabla,
      width: col.ancho,
      height: altoFilaTabla,
      borderColor: rgb(0.6, 0.6, 0.6),
      borderWidth: 0.4,
    });
    const valor = truncar(font, fila[col.key] ?? "", fuenteTabla, col.ancho - 6);
    pagina.drawText(valor, {
      x: x + 3,
      y: y - altoFilaTabla + 5,
      size: fuenteTabla,
      font,
      color: rgb(0, 0, 0),
    });
    x += col.ancho;
  }
}

/**
 * Dibuja una sección de tabla (Sitio / Edificio / Piso) con paginación automática.
 * Reutiliza la página/y actuales del estado, y crea páginas nuevas cuando no entra una fila.
 */
export function dibujarSeccionTabla(
  estado: EstadoDibujo,
  titulo: string,
  columnas: ColumnaTabla[],
  filas: FilaTabla[]
): EstadoDibujo {
  let { pagina, y } = estado;
  const { doc, font, fontBold } = estado;
  const margenInferior = margen + altoFilaTabla; // dejar aire abajo

  // Título de sección
  if (y - 20 < margenInferior) {
    pagina = nuevaPagina(doc);
    y = altoPagina - margen;
  }
  pagina.drawText(titulo, {
    x: margen,
    y: y - 14,
    size: 12,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  dibujarEncabezadoColumnas(pagina, font, columnas, y);
  y -= altoFilaHeader;

  for (const fila of filas) {
    if (y - altoFilaTabla < margenInferior) {
      pagina = nuevaPagina(doc);
      y = altoPagina - margen;
      dibujarEncabezadoColumnas(pagina, font, columnas, y);
      y -= altoFilaHeader;
    }
    dibujarFila(pagina, font, columnas, fila, y);
    y -= altoFilaTabla;
  }

  return { doc, font, fontBold, pagina, y: y - 10 };
}

export function crearEstadoInicial(doc: PDFDocument, font: PDFFont, fontBold: PDFFont): EstadoDibujo {
  const pagina = nuevaPagina(doc);
  return { doc, font, fontBold, pagina, y: altoPagina - margen };
}