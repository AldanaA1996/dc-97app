import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import type { ReactNode } from "react";

import {
  DatosEdificio,
  DatosGenerales,
  DatosSeccion,
  EdificioEvaluacion,
  FilaElemento,
  filaVacia,
} from "../types/evaluacion";
import { CATALOGO_DC97, ElementoCatalogo } from "./catalogoDC97";

export interface EstadoEvaluacionCompleto {
  datosGenerales: DatosGenerales;
  sitio: DatosSeccion;
  edificios: EdificioEvaluacion[];
}

const palette = {
  ink: "#1f2933",
  muted: "#667085",
  border: "#d9e0e7",
  soft: "#f4f7f9",
  accent: "#0f766e",
  accentSoft: "#e7f5f2",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: palette.white,
    color: palette.ink,
    fontFamily: "Helvetica",
    fontSize: 8,
    padding: 26,
    paddingBottom: 30,
  },
  header: {
    borderBottomColor: palette.accent,
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 7,
  },
  brand: {
    color: palette.accent,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  title: {
    color: palette.ink,
    fontSize: 17,
    fontFamily: "Helvetica-Bold",
    marginTop: 2,
  },
  subtitle: {
    color: palette.muted,
    fontSize: 8,
    marginTop: 3,
  },
  pageNumber: {
    color: palette.muted,
    fontSize: 8,
    textAlign: "right",
  },
  sectionTitle: {
    color: palette.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    marginBottom: 5,
    marginTop: 8,
  },
  sectionTitleFirst: {
    marginTop: 0,
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  summaryItem: {
    backgroundColor: palette.soft,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    width: "24%",
  },
  summaryItemWide: {
    width: "49%",
  },
  label: {
    color: palette.muted,
    fontSize: 6.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  value: {
    color: palette.ink,
    fontSize: 8,
    marginTop: 3,
  },
  description: {
    color: palette.ink,
    fontSize: 7,
    lineHeight: 1.2,
    marginTop: 3,
  },
  buildingCard: {
    backgroundColor: palette.soft,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 6,
    padding: 7,
  },
  buildingHeader: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  buildingName: {
    color: palette.ink,
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  buildingMeta: {
    color: palette.muted,
    fontSize: 7,
    marginTop: 3,
  },
  badge: {
    backgroundColor: palette.accentSoft,
    borderRadius: 10,
    color: palette.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  buildingGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  buildingField: {
    width: "19%",
  },
  fieldValue: {
    color: palette.ink,
    fontSize: 7,
    marginTop: 2,
  },
  buildingSection: {
    marginTop: 3,
  },
  buildingSectionTitle: {
    color: palette.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 5,
    marginTop: 8,
  },
  tableSection: {
    marginTop: 10,
  },
  tableTitle: {
    backgroundColor: palette.accent,
    color: palette.white,
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  table: {
    borderColor: palette.border,
    borderWidth: 1,
  },
  tableHeader: {
    backgroundColor: palette.soft,
    flexDirection: "row",
  },
  tableRow: {
    borderTopColor: palette.border,
    borderTopWidth: 1,
    flexDirection: "row",
    minHeight: 22,
  },
  tableCell: {
    borderRightColor: palette.border,
    borderRightWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  tableHeaderText: {
    color: palette.muted,
    fontFamily: "Helvetica-Bold",
    fontSize: 6,
  },
  tableText: {
    color: palette.ink,
    fontSize: 6.5,
    lineHeight: 1.2,
  },
  code: { width: "8%" },
  number: { width: "5%" },
  name: { width: "19%" },
  component: { width: "21%" },
  unit: { width: "6%" },
  quantity: { width: "8%" },
  year: { width: "8%" },
  condition: { width: "9%" },
  remaining: { width: "8%" },
  extra: { borderRightWidth: 0, width: "8%" },
  footer: {
    bottom: 16,
    color: palette.muted,
    fontSize: 7,
    left: 30,
    position: "absolute",
    right: 30,
    textAlign: "center",
  },
  empty: {
    backgroundColor: palette.soft,
    color: palette.muted,
    fontSize: 8,
    padding: 10,
  },
});

type ColumnKey =
  | "codigo"
  | "numero"
  | "nombre"
  | "componente"
  | "unidad"
  | "cantidad"
  | "anioReemplazo"
  | "condicion"
  | "aniosRestantes"
  | "infoAdicional";

const columns: { key: ColumnKey; label: string; style: keyof typeof styles }[] = [
  { key: "codigo", label: "Código", style: "code" },
  { key: "numero", label: "N.º", style: "number" },
  { key: "nombre", label: "Elemento", style: "name" },
  { key: "componente", label: "Componente", style: "component" },
  { key: "unidad", label: "Unid.", style: "unit" },
  { key: "cantidad", label: "Cantidad", style: "quantity" },
  { key: "anioReemplazo", label: "Año reemplazo", style: "year" },
  { key: "condicion", label: "Condición", style: "condition" },
  { key: "aniosRestantes", label: "Años rest.", style: "remaining" },
  { key: "infoAdicional", label: "Notas", style: "extra" },
];

function texto(valor: string | number | null | undefined): string {
  return valor == null || valor === "" ? "-" : String(valor);
}

function Header({ subtitle }: { subtitle: string }) {
  return (
    <View style={styles.header} fixed>
      <View>
        <Text style={styles.brand}>DC-97 · Evaluación de condiciones</Text>
        <Text style={styles.title}>Informe de evaluación</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`}
      />
    </View>
  );
}

function Footer() {
  return <Text style={styles.footer} fixed>Documento generado desde la aplicación DC-97</Text>;
}

function Field({ label, value, wide = false }: { label: string; value: string | number | undefined; wide?: boolean }) {
  return (
    <View style={[styles.summaryItem, wide ? styles.summaryItemWide : undefined]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{texto(value)}</Text>
    </View>
  );
}

function GeneralSummary({ datos }: { datos: DatosGenerales }) {
  return (
    <>
      <Text style={[styles.sectionTitle, styles.sectionTitleFirst]}>Resumen del proyecto</Text>
      <View style={styles.summaryGrid}>
        <Field label="Fecha de evaluación" value={datos.fechaEvaluacion} />
        <Field label="Año en curso" value={datos.anioEnCurso} />
        <Field label="Oficina" value={datos.oficina} />
        <Field label="Edificios" value={datos.numeroEdificios} />
        <Field label="Dirección del sitio" value={datos.direccionSitio} wide />
        <Field label="Uso principal" value={datos.usoPrincipal} />
        <Field label="Clima" value={datos.clima} />
        <Field label="Unidad de medida" value={datos.unidadMedida} />
      </View>
      <Text style={styles.sectionTitle}>Descripción de la evaluación</Text>
      <Text style={styles.description}>{texto(datos.descripcionEvaluacion)}</Text>
    </>
  );
}

function filaPara(elemento: ElementoCatalogo, datos: DatosSeccion): FilaElemento {
  return datos[elemento.numero] ?? filaVacia;
}

function EvaluationTable({
  title,
  catalogo,
  datos,
}: {
  title: string;
  catalogo: ElementoCatalogo[];
  datos: DatosSeccion;
}) {
  return (
    <View style={styles.tableSection} wrap>
      <Text style={styles.tableTitle}>{title}</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader} fixed>
          {columns.map((column) => (
            <View key={column.key} style={[styles.tableCell, styles[column.style]]}>
              <Text style={styles.tableHeaderText}>{column.label}</Text>
            </View>
          ))}
        </View>
        {catalogo.map((elemento) => {
          const fila = filaPara(elemento, datos);
          const values: Record<ColumnKey, string> = {
            codigo: fila.codigo,
            numero: String(elemento.numero),
            nombre: elemento.nombre,
            componente: fila.componente,
            unidad: fila.unidad,
            cantidad: fila.cantidad,
            anioReemplazo: fila.anioReemplazo,
            condicion: fila.condicion,
            aniosRestantes: fila.aniosRestantes,
            infoAdicional: fila.infoAdicional,
          };

          return (
            <View style={styles.tableRow} key={`${title}-${elemento.numero}`} wrap={false}>
              {columns.map((column) => (
                <View key={column.key} style={[styles.tableCell, styles[column.style]]}>
                  <Text style={styles.tableText}>{texto(values[column.key])}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}

function BuildingSummary({ edificio }: { edificio: EdificioEvaluacion }) {
  const datos: DatosEdificio = edificio.datos;

  return (
    <View style={styles.buildingCard}>
      <View style={styles.buildingHeader}>
        <View>
          <Text style={styles.buildingName}>{texto(datos.nombre) || `Edificio ${edificio.id}`}</Text>
          <Text style={styles.buildingMeta}>Registro de edificio #{edificio.id}</Text>
        </View>
        <Text style={styles.badge}>{texto(datos.numPisos)} pisos</Text>
      </View>
      <View style={styles.buildingGrid}>
        <View style={styles.buildingField}><Text style={styles.label}>N.º WHQ</Text><Text style={styles.fieldValue}>{texto(datos.numEdifWHQ)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Categoría</Text><Text style={styles.fieldValue}>{texto(datos.catOcupacion)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Área total</Text><Text style={styles.fieldValue}>{texto(datos.totalAreaSuelo)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Construcción</Text><Text style={styles.fieldValue}>{texto(datos.anioConsOriginal)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Última remodelación</Text><Text style={styles.fieldValue}>{texto(datos.anioUltRemoGrande)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Mantenimiento</Text><Text style={styles.fieldValue}>{texto(datos.condMantenimiento)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Condición</Text><Text style={styles.fieldValue}>{texto(datos.condEdif)}</Text></View>
        <View style={styles.buildingField}><Text style={styles.label}>Remodelación proyectada</Text><Text style={styles.fieldValue}>{texto(datos.anioRemoProyectada)}</Text></View>
      </View>
    </View>
  );
}

function BuildingsOverview({ edificios }: { edificios: EdificioEvaluacion[] }) {
  return (
    <View style={styles.buildingSection}>
      <Text style={styles.buildingSectionTitle}>Datos de los edificios</Text>
      {edificios.length > 0 ? (
        edificios.map((edificio) => (
          <BuildingSummary key={`resumen-edificio-${edificio.id}`} edificio={edificio} />
        ))
      ) : (
        <Text style={styles.empty}>No hay edificios registrados.</Text>
      )}
    </View>
  );
}

function ReportPage({ children, subtitle }: { children: ReactNode; subtitle: string }) {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Header subtitle={subtitle} />
      {children}
      <Footer />
    </Page>
  );
}

function EvaluationDocument({ estado }: { estado: EstadoEvaluacionCompleto }) {
  return (
    <Document
      title="Evaluación DC-97"
      author="Aplicación DC-97"
      subject="Informe de evaluación de condiciones"
      language="es"
    >
      <ReportPage subtitle="Resumen general y evaluación del sitio">
        <GeneralSummary datos={estado.datosGenerales} />
        <BuildingsOverview edificios={estado.edificios} />
      </ReportPage>

      <ReportPage subtitle="Detalle de la evaluación del sitio">
        <EvaluationTable title="Evaluación del sitio" catalogo={CATALOGO_DC97.sitio} datos={estado.sitio} />
      </ReportPage>

      {estado.edificios.map((edificio) => (
        <ReportPage key={`edificio-${edificio.id}`} subtitle={`Edificio ${edificio.id} · ${texto(edificio.datos.nombre)}`}>
          <BuildingSummary edificio={edificio} />
          <EvaluationTable title="Evaluación del edificio" catalogo={CATALOGO_DC97.edificio} datos={edificio.evaluacion} />
          {edificio.pisos.map((piso) => (
            <EvaluationTable
              key={`piso-${edificio.id}-${piso.id}`}
              title={`Piso ${piso.id}`}
              catalogo={CATALOGO_DC97.piso}
              datos={piso.evaluacion}
            />
          ))}
        </ReportPage>
      ))}

    </Document>
  );
}

export async function generarPDF(estado: EstadoEvaluacionCompleto): Promise<Uint8Array> {
  const documento = <EvaluationDocument estado={estado} />;
  const blob = await pdf(documento).toBlob();
  return new Uint8Array(await blob.arrayBuffer());
}
