// src/types/evaluacion.ts

export interface FilaElemento {
  codigo: string;
  numero: number;
  nombre: string;
  componente: string;
  unidad: string;
  cantidad: string;
  anioReemplazo: string;
  condicion: string;
  aniosRestantes: string;
  ajusteAniosRestantes: number | null;
  infoAdicional: string;
}

export const filaVacia: FilaElemento = {
  codigo: "",
  numero: 0,
  nombre: "",
  componente: "",
  unidad: "",
  cantidad: "",
  anioReemplazo: "",
  condicion: "",
  aniosRestantes: "",
  ajusteAniosRestantes: null,
  infoAdicional: "",
};

// Datos traidos desde datos.tsx
export interface DatosGenerales {
  fechaEvaluacion?: string;
  anioEnCurso?: string;
  oficina?: string;
  direccionSitio?: string;
  clima?: string;
  unidadMedida?: string;
  usoPrincipal?: string;
  numeroEdificios?: number;
  descripcionEvaluacion?: string;
}

export const datosGeneralesVacio: DatosGenerales = {
  fechaEvaluacion: "",
  anioEnCurso: "",
  oficina: "",
  direccionSitio: "",
  clima: "",
  unidadMedida: "",
  usoPrincipal: "",
  numeroEdificios: undefined,
  descripcionEvaluacion: "",
};

//datos traidos desde datosEdif.tsx
export interface DatosEdificio {
  numEdifWHQ?: number;
  nombre: string;
  numPisos: number;
  catOcupacion: string;
  totalAreaSuelo: number;
  anioConsOriginal: number;
  anioUltRemoGrande: number;
  condMantenimiento: string;
  condEdif: string;
  anioRemoProyectada: number;
}

export const datosEdificioVacio: DatosEdificio = {
  numEdifWHQ: undefined,
  nombre: "",
  numPisos: 1,
  catOcupacion: "",
  totalAreaSuelo: 0,
  anioConsOriginal: 0,
  anioUltRemoGrande: 0,
  condMantenimiento: "",
  condEdif: "",
  anioRemoProyectada: 0,
};

// Cada sección (Sitio, Edificio, Piso) guarda un Record<numero, FilaElemento>
export type DatosSeccion = Record<number, FilaElemento>;

export interface Piso {
  id: number;
  evaluacion: DatosSeccion;
}

export interface EdificioEvaluacion {
  id: number;
  datos: DatosEdificio;
  evaluacion: DatosSeccion;
  pisos: Piso[];
}