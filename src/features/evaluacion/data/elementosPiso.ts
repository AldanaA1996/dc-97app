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
    numero: 38,
    nombre: "Construcción de PISO",
    componentes: [
      {
        codigo: "B1012",
        componente: "Base de Suelo y Contrapiso",
        unidad: "A",
      },
      { codigo: "B1012", componente: "Concreto/Hormigón", unidad: "A" },
      { codigo: "B1012", componente: "Madera Blanda", unidad: "A" },
      {
        codigo: "B1012",
        componente: "Madera Contrachapada (triplay)",
        unidad: "A",
      },
      { codigo: "B1012", componente: "Madera Prensada", unidad: "A" },
      {
        codigo: "B1012",
        componente: "Tableros de Fibra Orientada (OSB)",
        unidad: "A",
      },
      { codigo: "B1012", componente: "Tableros de Partículas", unidad: "A" },
    ],
  },
  {
    numero: 39,
    nombre: "Acabados del PISO",
    componentes: [
      { codigo: "C2030", componente: "Hormigón/Concreto", unidad: "A" },
      { codigo: "C2030", componente: "Laminado", unidad: "A" },
      { codigo: "C2030", componente: "Linóleo", unidad: "A" },
      { codigo: "C2030", componente: "Revestimiento Epóxico", unidad: "A" },
      { codigo: "C2030", componente: "Sellador/Barniz/Pintura", unidad: "A" },
      { codigo: "C2030", componente: "Vinilo", unidad: "A" },
      { codigo: "C2032", componente: "Baldosas - Cerámica", unidad: "A" },
      { codigo: "C2032", componente: "Baldosas - Gres", unidad: "A" },
      { codigo: "C2032", componente: "Baldosas - Porcelana", unidad: "A" },
      { codigo: "C2037", componente: "Alfombra", unidad: "A" },
      {
        codigo: "C2037",
        componente: "Baldosas de Alfombra (clasificación de contrato)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 42,
    nombre: "ACABADOS de Muros Interiores",
    componentes: [
      {
        codigo: "C2010",
        componente: "Paneles de Pared (acabado de fábrica)",
        unidad: "A",
      },
      { codigo: "C2010", componente: "Pintura (interior)", unidad: "A" },
      {
        codigo: "C2010",
        componente: "Revestimientos de Pared (Vinilo)",
        unidad: "A",
      },
      {
        codigo: "C2011",
        componente: "Baldosas o Piezas de Cerámica",
        unidad: "A",
      },
    ],
  },
  {
    numero: 43,
    nombre: "Ventanas/Marcos INTERIORES",
    componentes: [
      { codigo: "C1020", componente: "Ventanas Interiores", unidad: "N" },
    ],
  },
  {
    numero: 44,
    nombre: "Puertas/Marcos INTERIORES",
    componentes: [
      {
        codigo: "C1030",
        componente: "Acero Resistente al Fuego (interior)",
        unidad: "N",
      },
      {
        codigo: "C1030",
        componente: "Armario (puertas de interior plegable y/o corredizas)\xa0",
        unidad: "N",
      },
      { codigo: "C1030", componente: "Francesa (interior)\xa0", unidad: "N" },
      {
        codigo: "C1030",
        componente: "Madera (núcleo interior hueco)",
        unidad: "N",
      },
      {
        codigo: "C1030",
        componente: "Madera (núcleo interior sólido)",
        unidad: "N",
      },
      { codigo: "C1030", componente: "Metal", unidad: "N" },
      {
        codigo: "C1030",
        componente: "Vidrio (marco de aluminio)",
        unidad: "N",
      },
    ],
  },
  {
    numero: 45,
    nombre: "Asientos de Auditorio",
    componentes: [
      { codigo: "E2070", componente: "Bancos", unidad: "N" },
      { codigo: "E2070", componente: "Sillas de Auditorio", unidad: "N" },
    ],
  },
  {
    numero: 46,
    nombre: "Estructura, Acabado de Techos",
    componentes: [
      {
        codigo: "C1070",
        componente: "Baldosas/Plafones Acústicos",
        unidad: "A",
      },
      {
        codigo: "C1070",
        componente: "Estructura de Cielorraso Suspendido",
        unidad: "A",
      },
      { codigo: "C1070", componente: "Hormigón/Concreto", unidad: "A" },
      { codigo: "C1070", componente: "Tablaroca", unidad: "A" },
      { codigo: "C2010", componente: "Pintura (interior)", unidad: "A" },
      {
        codigo: "C2010",
        componente: "Tablones de Madera/Paneles",
        unidad: "A",
      },
      {
        codigo: "C2010",
        componente: "Vinilo/Baldosas de PVC/Paneles",
        unidad: "A",
      },
    ],
  },
  {
    numero: 47,
    nombre: "Iluminación Interna (Aparatos)",
    componentes: [
      { codigo: "D5040", componente: "Controles de Iluminación", unidad: "N" },
      {
        codigo: "D5040",
        componente: "Luminarias (accesorios de iluminación)",
        unidad: "N",
      },
    ],
  },
  {
    numero: 48,
    nombre: "Sistema de Sonido",
    componentes: [
      {
        codigo: "D6030",
        componente: "Sistema de Sonido (PA) con altavoces incluidos",
        unidad: "N",
      },
    ],
  },
  {
    numero: 50,
    nombre: "Equipo Residencial - Cocinas",
    componentes: [
      { codigo: "E1060", componente: "Estufa de Gas", unidad: "N" },
      { codigo: "E1060", componente: "Estufa Eléctrica", unidad: "N" },
      { codigo: "E1060", componente: "Lavavajillas", unidad: "N" },
      { codigo: "E1060", componente: "Refrigerador", unidad: "N" },
    ],
  },
  {
    numero: 51,
    nombre: "Ebanistería/Carpintería",
    componentes: [
      {
        codigo: "C1097",
        componente: "Gabinete de Almacenamiento (laminado)",
        unidad: "N",
      },
      {
        codigo: "C1097",
        componente: "Gabinete de Almacenamiento (madera sólida)",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinete con fregadero/lavabo/bebedero integrado",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinete para Baños, en suelo y montados a la pared",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinetes de Cocina comerciales (acrílico)",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinetes de Cocina comerciales (madera sólida)",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinetes de Cocina domésticos (laminado)",
        unidad: "N",
      },
      {
        codigo: "E2013",
        componente: "Gabinetes de Cocina domésticos (madera sólida)",
        unidad: "N",
      },
      { codigo: "E2013", componente: "Librero", unidad: "N" },
    ],
  },
  {
    numero: 52,
    nombre: "Equipo Comercial de Servicios de Alimentación",
    componentes: [
      {
        codigo: "E1038",
        componente: "Cámara de Congelador/Enfriamiento",
        unidad: "N",
      },
      { codigo: "E1038", componente: "Estufa de Gas", unidad: "N" },
      { codigo: "E1038", componente: "Estufa Eléctrica", unidad: "N" },
      { codigo: "E1038", componente: "Estufa/Horno con Campana", unidad: "N" },
      { codigo: "E1038", componente: "Lavavajillas (comercial)", unidad: "N" },
      {
        codigo: "E1038",
        componente: "Sistema de Refrigeración Autónomo",
        unidad: "N",
      },
    ],
  },
  {
    numero: 53,
    nombre: "Equipo de Lavandería Residencial",
    componentes: [
      { codigo: "E1060", componente: "Lavadora (doméstica)", unidad: "N" },
      { codigo: "E1060", componente: "Secadora (ropa)", unidad: "N" },
    ],
  },
  {
    numero: 54,
    nombre: "Equipo de Lavandería Comercial",
    componentes: [
      { codigo: "E1033", componente: "Equipo de Acabado", unidad: "N" },
      { codigo: "E1033", componente: "Lavadora (comercial)", unidad: "N" },
      { codigo: "E1033", componente: "Secadora (ropa)", unidad: "N" },
    ],
  },
  {
    numero: 55,
    nombre: "Escaleras y Salidas de Emergencia",
    componentes: [
      {
        codigo: "B1080",
        componente: "Escalera de Escape de Incendio",
        unidad: "N",
      },
      { codigo: "B1080", componente: "Hormigón/Concreto", unidad: "N" },
      { codigo: "B1080", componente: "Madera", unidad: "N" },
      { codigo: "B1080", componente: "Metal", unidad: "N" },
      { codigo: "C2010", componente: "Pintura (interior)", unidad: "A" },
      { codigo: "C2037", componente: "Alfombra", unidad: "A" },
    ],
  },
  {
    numero: 57,
    nombre: "Accesorios de Plomería",
    componentes: [
      { codigo: "D2010", componente: "Bañera de Hierro Fundido", unidad: "N" },
      {
        codigo: "D2010",
        componente: "Bañera y Regadera de Fibra de Vidrio",
        unidad: "N",
      },
      {
        codigo: "D2010",
        componente: "Bebedero (con refrigeración)",
        unidad: "N",
      },
      {
        codigo: "D2010",
        componente: "Bebedero (sin refrigeración)",
        unidad: "N",
      },
      { codigo: "D2010", componente: "Cabina de Baño (Baldosas)", unidad: "N" },
      {
        codigo: "D2010",
        componente: "Calentador de Agua (Tanque de Depósito)",
        unidad: "N",
      },
      {
        codigo: "D2010",
        componente: "Inodoros, Bidés, Mingitorios y Urinarios",
        unidad: "N",
      },
      {
        codigo: "D2010",
        componente: "Lavabos (no dentro de mueble)",
        unidad: "N",
      },
    ],
  },
  
  {
    numero: 59,
    nombre: "Aislación - Cielorraso",
    componentes: [
      { codigo: "C1070", componente: "Cartón Espuma", unidad: "A" },
      { codigo: "C1070", componente: "Celulosa", unidad: "A" },
      {
        codigo: "C1070",
        componente: "Fibra de Vidrio (expuesta)",
        unidad: "A",
      },
      { codigo: "C1070", componente: "Lana de Roca", unidad: "A" },
      { codigo: "C1070", componente: "Membrana Hidrofuga", unidad: "A" },
      {
        codigo: "C1070",
        componente: "Papel Negro (papel fieltro)",
        unidad: "A",
      },
      { codigo: "C1070", componente: "Relleno Suelto", unidad: "A" },
      {
        codigo: "C1070",
        componente: "Rociador de Espuma Icynene (célula abierta)",
        unidad: "A",
      },
      {
        codigo: "C1070",
        componente: "Rollos de Fribra de Vidrio (empacado)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 60,
    nombre: "Sistema de Vídeo",
    componentes: [
      { codigo: "D6030", componente: "Sistema Completo", unidad: "N" },
    ],
  }
]