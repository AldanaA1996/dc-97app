export interface Componente {
  codigo: string;
  componente: string;
  unidad: string;
}

export interface Elemento {
  numero: number;
  nombre: string;
  componentes: Componente[];
}

export const catalogoCostos: Elemento[] = [
  {
    numero: 1,
    nombre: "Muros Perimetrales",
    componentes: [
      {
        codigo: "G2060",
        componente: "Muros Exteriores (Mampostería, Albañilería)",
        unidad: "L",
      },
      {
        codigo: "G2060",
        componente: "Poste y Panel de Concreto Reforzado",
        unidad: "L",
      },
    ],
  },
  {
    numero: 2,
    nombre: "Cerco Perimetral",
    componentes: [
      {
        codigo: "G2060",
        componente: "Cerco de Madera (Madera Dura de preferencia)",
        unidad: "L",
      },
      {
        codigo: "G2060",
        componente: "Cerco Vinílico",
        unidad: "L",
      },
      {
        codigo: "G2060",
        componente: "Hierro Forjado",
        unidad: "L",
      },
      {
        codigo: "G2060",
        componente: "Madera Comprimida y Tratada",
        unidad: "L",
      },
      {
        codigo: "G2060",
        componente: "Malla Ciclónica (Galvanizado)",
        unidad: "L",
      },
    ],
  },
  {
    numero: 3,
    nombre: "Calles/Estacionamientos y Veredas",
    componentes: [
      {
        codigo: "G2020",
        componente: "Bloques de Adoquín",
        unidad: "A",
      },
      {
        codigo: "G2020",
        componente: "Calles/Estacionamientos de Concreto",
        unidad: "A",
      },
      {
        codigo: "G2020",
        componente: "Calzada de Asfalto [30-40mm de espesor]",
        unidad: "A",
      },
      {
        codigo: "G2030",
        componente: "Andadores de Concreto",
        unidad: "A",
      },
      {
        codigo: "G2030",
        componente: "Patios de Concreto y Ladrillo",
        unidad: "A",
      },
    ],
  },
  {
    numero: 4,
    nombre: "Paisajismo",
    componentes: [
      {
        codigo: "G2080",
        componente: "Paisajismo",
        unidad: "A",
      },
    ],
  },
  {
    numero: 5,
    nombre: "Alumbrado de Sitio (Externo)",
    componentes: [
      {
        codigo: "G4050",
        componente: "Estacionamiento (Independiente)",
        unidad: "N",
      },
      {
        codigo: "G4050",
        componente: "Iluminación Exterior",
        unidad: "N",
      },
      {
        codigo: "G4050",
        componente: "Luz Empotrada Bajo Techo",
        unidad: "N",
      },
      {
        codigo: "G4050",
        componente: "Montada en la Pared",
        unidad: "N",
      },
      {
        codigo: "G4050",
        componente: "Señalización y sobre Paisajismo",
        unidad: "N",
      },
    ],
  },
  {
    numero: 18,
    nombre: "Obras Civiles - Servicio de Agua",
    componentes: [
      { codigo: "G3010", componente: "Bomba de Pozo", unidad: "N" },
      { codigo: "G3010", componente: "Cobre", unidad: "N" },
      { codigo: "G3010", componente: "Galvanizada", unidad: "N" },
      { codigo: "G3010", componente: "PVC", unidad: "N" },
    ],
  },
  {
    numero: 19,
    nombre: "Obras Civiles - Servicio de Gas",
    componentes: [
      {
        codigo: "G3060",
        componente: "Líneas de Gas (acero negro y flexibles)",
        unidad: "N",
      },
      { codigo: "G3060", componente: "Líneas de Gas (flexibles)", unidad: "N" },
    ],
  },
  {
    numero: 20,
    nombre: "Obras Civiles - Servicio Eléctrico",
    componentes: [
      { codigo: "G4010", componente: "Aluminio", unidad: "N" },
      { codigo: "G4010", componente: "Cobre", unidad: "N" },
    ],
  },
  {
    numero: 21,
    nombre: "Obras Civiles - Servicio de Datos",
    componentes: [
      { codigo: "G5010", componente: "Cobre", unidad: "N" },
      { codigo: "G5010", componente: "Fibra", unidad: "N" },
    ],
  },
  {
    numero: 22,
    nombre: "Obras Civiles - Servicio Telefónico",
    componentes: [
      { codigo: "G5010", componente: "Cobre", unidad: "N" },
      { codigo: "G5010", componente: "Fibra", unidad: "N" },
    ],
  },
  {
    numero: 27,
    nombre: "Obras Civiles - Sistema Sanitario de Aguas Residuales",
    componentes: [
      { codigo: "G3020", componente: "Concreto/Hormigón", unidad: "N" },
      { codigo: "G3020", componente: "Hierro Fundido", unidad: "N" },
      { codigo: "G3020", componente: "PVC", unidad: "N" },
      { codigo: "G3020", componente: "Tanque Séptico (concreto)", unidad: "N" },
      { codigo: "G3020", componente: "Tanque Séptico (metal)", unidad: "N" },
    ],
  },
  {
    numero: 61,
    nombre: "Sistema de Riego",
    componentes: [
      {
        codigo: "G2081",
        componente: "Sistema de Riego por Goteo",
        unidad: "N",
      },
      { codigo: "G2081", componente: "Sistema de Rociadores", unidad: "N" },
    ],
  },
   {
    numero: 63,
    nombre: "Obras Civiles - Sistema de Drenaje para Tormentas",
    componentes: [
      { codigo: "G3030", componente: "Arcilla Vitrificada", unidad: "N" },
      { codigo: "G3030", componente: "Concreto/Hormigón", unidad: "N" },
      { codigo: "G3030", componente: "Metal Corrugado", unidad: "N" },
      {
        codigo: "G3030",
        componente: "Polietileno de Alta Densidad (HDPE) Corrugado",
        unidad: "N",
      },
      { codigo: "G3030", componente: "PVC", unidad: "N" },
    ],
  },
]