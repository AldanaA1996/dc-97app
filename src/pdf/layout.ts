// src/pdf/layoutDC97.ts
//
// Coordenadas extraídas con pdfplumber directamente del PDF de
// referencia (DC-97-S). Todas las medidas están en el sistema de
// pdfplumber (origen arriba-izquierda, `top` = distancia desde arriba).
// Los helpers de más abajo convierten a coordenadas de pdf-lib
// (origen abajo-izquierda).

export const PAGINA_DC97 = {
  ancho: 841.92,
  alto: 595.32,
};

// ── Caja de un campo (rectángulo donde se dibuja el valor) ────────────
export interface CajaCampo {
  x0: number;
  x1: number;
  top: number;
  bottom: number;
}

// ── Campos del bloque "Sitio" (parte superior de la página) ──────────
export const CAMPOS_SITIO: Record<string, CajaCampo> = {
  fechaEvaluacion: { x0: 148.3, x1: 207.5, top: 74.7, bottom: 82.7 },
  anioEnCurso: { x0: 274.0, x1: 298.6, top: 74.5, bottom: 82.8 },
  oficina: { x0: 365.1, x1: 397.2, top: 74.7, bottom: 82.7 },
  descripcionEvaluacion: { x0: 486.1, x1: 650.0, top: 74.7, bottom: 126.6 },
  direccionSitio: { x0: 148.3, x1: 475.5, top: 84.6, bottom: 92.7 },
  clima: { x0: 148.3, x1: 187.8, top: 94.6, bottom: 102.6 },
  unidadMedida: { x0: 148.3, x1: 187.8, top: 104.5, bottom: 112.6 },
  usoPrincipal: { x0: 148.3, x1: 231.0, top: 114.5, bottom: 126.5 },
  numeroEdificios: { x0: 148.3, x1: 168.1, top: 128.4, bottom: 136.5 },
};

// ── Campos del bloque "Edificio N" (fila fija en y = 160.1–168.1) ────
export const CAMPOS_EDIFICIO: Record<string, CajaCampo> = {
  numEdifWHQ: { x0: 148.3, x1: 207.5, top: 160.1, bottom: 168.1 },
  nombre: { x0: 211.2, x1: 270.4, top: 160.1, bottom: 168.1 },
  numPisos: { x0: 274.1, x1: 298.5, top: 160.1, bottom: 168.1 },
  catOcupacion: { x0: 302.2, x1: 361.4, top: 160.1, bottom: 168.1 },
  totalAreaSuelo: { x0: 365.1, x1: 412.5, top: 160.1, bottom: 168.1 },
  anioConsOriginal: { x0: 416.2, x1: 458.1, top: 160.1, bottom: 168.1 },
  anioUltRemoGrande: { x0: 461.8, x1: 501.7, top: 160.1, bottom: 168.1 },
  condMantenimiento: { x0: 505.4, x1: 557.7, top: 160.1, bottom: 168.1 },
  condEdif: { x0: 561.4, x1: 614.1, top: 160.1, bottom: 168.1 },
  anioRemoProyectada: { x0: 617.9, x1: 650.0, top: 160.1, bottom: 168.1 },
};

// ── Columnas de la tabla de elementos (Sitio/Edificio/Piso apiladas) ─
export interface ColumnaDC97 {
  key: keyof FilaColumnas;
  x0: number;
  x1: number;
}

export interface FilaColumnas {
  seccionLabel: string;
  codigo: string;
  numero: string;
  nombre: string;
  componente: string;
  unidad: string;
  cantidad: string;
  anioReemplazo: string;
  condicion: string;
  aniosRestantes: string;
  ajusteAniosRestantes: string;
  infoAdicional: string;
}

export const COLUMNAS_TABLA: ColumnaDC97[] = [
  { key: "seccionLabel", x0: 88.0, x1: 105.5 },
  { key: "codigo", x0: 105.5, x1: 131.4 },
  { key: "numero", x0: 131.4, x1: 144.4 },
  { key: "nombre", x0: 144.4, x1: 274.0 },
  { key: "componente", x0: 274.0, x1: 397.0 },
  { key: "unidad", x0: 397.0, x1: 416.1 },
  { key: "cantidad", x0: 416.1, x1: 457.9 },
  { key: "anioReemplazo", x0: 457.9, x1: 485.9 },
  { key: "condicion", x0: 485.9, x1: 501.7 },
  { key: "aniosRestantes", x0: 501.7, x1: 520.6 },
  { key: "ajusteAniosRestantes", x0: 520.6, x1: 540.0 },
  { key: "infoAdicional", x0: 540.0, x1: 649.8 },
];

// ── Filas: la tabla es fija (siempre los mismos 62 elementos), así
//    que cada fila tiene un `top` conocido de antemano. En vez de
//    hardcodear los 62 valores medidos, se reconstruyen a partir de
//    3 anclas + una altura de fila constante (fieles a lo medido).
export const ALTO_FILA = 5.0417;

export const INICIO_SECCION: Record<"sitio" | "edificio" | "piso", number> = {
  sitio: 214.5,
  edificio: 285.1,
  piso: 446.4,
};

export const TOP_ENCABEZADO_TABLA = 170.3; // inicio de la fila de títulos de columna
export const ALTO_ENCABEZADO_TABLA = 44.2; // hasta justo antes de la primera fila de datos

export const FUENTES = {
  campoLabel: 6.5,
  campoValor: 7.5,
  tablaHeader: 6,
  tablaTexto: 6.2,
  tituloSeccionVertical: 6.5,
};

// ── Helpers de conversión pdfplumber (top) → pdf-lib (y, origen abajo) ─

/** y de la línea base de texto para una caja de campo, alineada verticalmente al centro. */
export function yCentroCaja(caja: CajaCampo, tamanioFuente: number): number {
  const alturaCaja = caja.bottom - caja.top;
  const offsetBaseline = (alturaCaja - tamanioFuente) / 2 + tamanioFuente * 0.78;
  return PAGINA_DC97.alto - caja.top - offsetBaseline;
}

/** y de la línea base de texto para una fila de tabla dado su `top`. */
export function yFila(top: number, tamanioFuente: number = FUENTES.tablaTexto): number {
  return PAGINA_DC97.alto - top - ALTO_FILA + tamanioFuente * 0.85;
}

/** top de la fila `index` (0-based) dentro de una sección. */
export function topDeFila(seccion: "sitio" | "edificio" | "piso", index: number): number {
  return INICIO_SECCION[seccion] + index * ALTO_FILA;
}