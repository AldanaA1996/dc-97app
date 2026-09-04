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
    numero: 6,
    nombre: "Cimentación/Fundaciones",
    componentes: [
      {
        codigo: "A1010",
        componente: "Bloque de Concreto",
        unidad: "A",
      },
      {
        codigo: "A1010",
        componente: "Cimiento de Madera [debajo del grado ext]",
        unidad: "A",
      },
      {
        codigo: "A1010",
        componente: "Cimiento de Madera Permanente (PWF; tratada)",
        unidad: "A",
      },
      {
        codigo: "A1010",
        componente: "Moldes de Concreto Aislado (ICFs)",
        unidad: "A",
      },
      {
        codigo: "A1010",
        componente: "Zapatas y Postes",
        unidad: "A",
      },
      {
        codigo: "A4010",
        componente: "Losa a Nivel de Suelo (concreto)",
        unidad: "A",
      },
      {
        codigo: "A4010",
        componente: "Poste y Placa Tensada a Nivel de Suelo",
        unidad: "A",
      },
      {
        codigo: "A4020",
        componente: "Vaciado de Concreto incluyendo Zapatas",
        unidad: "A",
      },
    ],
  },
  {
    numero: 7,
    nombre: "Armazón Estructural",
    componentes: [
      {
        codigo: "B1011",
        componente: "Acero",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Columnas de Acero y Placas Galvanizadas",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Conectores Estructurales para Construcción de Madera",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Estructura de Madera",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Ladrillo",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Moldes de Concreto Aislado (ICFs)",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Paneles Estructurales Insulados (SIPs)",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Sistema de Concreto Premezclado",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Sistemas de Vaciado de Concreto",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Unidades de Albañilería de Concreto (CMUs)",
        unidad: "A",
      },
      {
        codigo: "B1011",
        componente: "Vigas de Acero",
        unidad: "A",
      },
    ],
  },
  {
    numero: 8,
    nombre: "Construcción de Muros Exteriores, Formica, Acabados",
    componentes: [
      {
        codigo: "B2010",
        componente: "Albañilería, Mampostería (relleno de juntas con Mortero)",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Bloque y Albañilería (Mampostería)",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Cemento y Fibrocemento",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Chapa o Recubrimiento (albañilería delgada)",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Estuco/EIFS",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Fibra de Vidrio Mat Revestimiento DensGlass",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Madera (rastreles y molduras)",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Madera Prefabricada",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Moldes de Concreto Aislado (bloque híbrido)",
        unidad: "A",
      },
      { codigo: "B2010", componente: "Piedra Artificial (falsa)", unidad: "A" },
      { codigo: "B2010", componente: "Piedra y Piedra Fabricada", unidad: "A" },
      { codigo: "B2010", componente: "Revestimiento de Aluminio", unidad: "A" },
      { codigo: "B2010", componente: "Revestimiento de Madera", unidad: "A" },
      { codigo: "B2010", componente: "Revestimiento de Vinilo", unidad: "A" },
      {
        codigo: "B2010",
        componente: "Sellador de Albañilería/Mampostería",
        unidad: "A",
      },
      {
        codigo: "B2010",
        componente: "Sistema de Concreto Vaciado",
        unidad: "A",
      },
      { codigo: "B2010", componente: "Sofito", unidad: "A" },
      {
        codigo: "B2010",
        componente:
          "Unidades de Albañilería (Mampostería) de Concreto (CMUs) [Relleno de Núcleo]",
        unidad: "A",
      },
      { codigo: "B2011", componente: "Pintura (exterior)", unidad: "A" },
    ],
  },
  {
    numero: 9,
    nombre: "Estructura e Impermeabilización de Muros Bajo Tierra (Sótanos)",
    componentes: [
      {
        codigo: "A2010",
        componente: "Estructura de Muros Subrasante",
        unidad: "A",
      },
      { codigo: "A2019", componente: "Barrera de Vapor", unidad: "A" },
      { codigo: "A2019", componente: "Capa Inferior Sintética", unidad: "A" },
      { codigo: "A2019", componente: "DPC DPM (polietileno)", unidad: "A" },
      {
        codigo: "A2019",
        componente: "Impermeabilización - Otros",
        unidad: "A",
      },
      {
        codigo: "A2019",
        componente: "Impermeabilización con Revestimiento Bituminoso",
        unidad: "A",
      },
      {
        codigo: "A2019",
        componente: "Membrana de Aplicación Líquida",
        unidad: "A",
      },
      { codigo: "F1050", componente: "Alberca de Bautismo", unidad: "N" },
      { codigo: "F1050", componente: "Piscina", unidad: "N" },
      { codigo: "F1050", componente: "Piscina Terapéutica", unidad: "N" },
      {
        codigo: "F1050",
        componente: "Sistema de Fontanería de Piscina",
        unidad: "N",
      },
    ],
  },
  {
    numero: 10,
    nombre: "Construcción de Techo Inclinado",
    componentes: [
      {
        codigo: "B1020",
        componente: "Cerchas [sólo si son TRATADAS]",
        unidad: "A",
      },
      {
        codigo: "B1020",
        componente: "Estructura de Techo Inclinado (madera y acero)",
        unidad: "A",
      },
      {
        codigo: "B1020",
        componente: "Estructura de Techo Inclinado (vigas de madera)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 11,
    nombre: "Recubrimiento de Techo Inclinado",
    componentes: [
      { codigo: "B3010", componente: "Asfalto (arquitectónico)", unidad: "A" },
      {
        codigo: "B3010",
        componente: "BUR (techado de capas y plano)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Fibrocemento", unidad: "A" },
      { codigo: "B3010", componente: "Hojas de Aluminio", unidad: "A" },
      { codigo: "B3010", componente: "Madera (teja)", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Pintura para recubrimiento (Aplicado en el campo)",
        unidad: "A",
      },
      {
        codigo: "B3010",
        componente: "Pintura para recubrimiento (Aplicado en Fábrica)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Pizarra (piedra negra)", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Pizarra Simulada (artificial)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Techo de Metal", unidad: "A" },
      { codigo: "B3010", componente: "Tejas de Arcilla/Concreto", unidad: "A" },
      { codigo: "B3010", componente: "Tejas de Asfalto (3-tab)", unidad: "A" },
    ],
  },
  {
    numero: 12,
    nombre: "Construcción de Techo Plano",
    componentes: [
      { codigo: "B1020", componente: "Concreto/Hormigón", unidad: "A" },
      {
        codigo: "B1020",
        componente: "Estructura de Techo Plano (cerchas de madera)",
        unidad: "A",
      },
      {
        codigo: "B1020",
        componente: "Estructura de Techo Plano (cerchas de metal)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 13,
    nombre: "Recubrimiento de Techo Plano",
    componentes: [
      { codigo: "B3010", componente: "Carbón y Alquitrán", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Caucho EPDM (monómero de etileno propileno dieno)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Láminas de Zinc", unidad: "A" },
      { codigo: "B3010", componente: "Membrana de PVC", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Metal (plástico/recubrimiento de polvo, galvanizado)",
        unidad: "A",
      },
      {
        codigo: "B3010",
        componente: "Metal (sin recubrimiento, NO galvanizado)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Recubrimiento de Aluminio", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Rociado de Espuma de Uretano",
        unidad: "A",
      },
      { codigo: "B3010", componente: "TPO o PVC", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Verde (cubierto de vegetación-ecológico)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 14,
    nombre: "Borde/Drenaje de Techo",
    componentes: [
      {
        codigo: "B3010",
        componente: "Canalones y Bajantes de Acero Galvanizados",
        unidad: "L",
      },
      {
        codigo: "B3010",
        componente: "Canalones y Bajantes de Aluminio",
        unidad: "L",
      },
      {
        codigo: "B3010",
        componente: "Canalones y Bajantes de Vinilo",
        unidad: "L",
      },
      { codigo: "B3010", componente: "Fascia de Aluminio", unidad: "L" },
      { codigo: "B3010", componente: "Fascia de Madera", unidad: "L" },
      { codigo: "B3010", componente: "Fascia de Vinilo", unidad: "L" },
    ],
  },
  {
    numero: 15,
    nombre: "Ventanas Exteriores",
    componentes: [
      {
        codigo: "B2020",
        componente: "Aluminio (con cobertura contra polvo)",
        unidad: "N",
      },
      { codigo: "B2020", componente: "Aluminio [anodizado]", unidad: "N" },
      { codigo: "B2020", componente: "Madera Blanda", unidad: "N" },
      { codigo: "B2020", componente: "Madera Dura", unidad: "N" },
      {
        codigo: "B2020",
        componente: "Madera/Persianas Exteriores",
        unidad: "N",
      },
      {
        codigo: "B2020",
        componente: "Recubrimiento de Aluminio (núcleo de madera)",
        unidad: "N",
      },
      { codigo: "B2020", componente: "Tragaluces/Lucernario", unidad: "N" },
      {
        codigo: "B2020",
        componente: "Ventana con Persianas (aluminio)",
        unidad: "N",
      },
      {
        codigo: "B2020",
        componente: "Ventanas de Vinilo/Fibra de Vidrio",
        unidad: "N",
      },
    ],
  },
  {
    numero: 16,
    nombre: "Puertas Exteriores",
    componentes: [
      {
        codigo: "B2050",
        componente: "Acero No Resistente al Fuego (exterior)",
        unidad: "N",
      },
      {
        codigo: "B2050",
        componente: "Acero Resistente al Fuego (exterior)",
        unidad: "N",
      },
      {
        codigo: "B2050",
        componente: "Cortina Enrollable (acero)",
        unidad: "N",
      },
      { codigo: "B2050", componente: "Madera (exterior)", unidad: "N" },
      {
        codigo: "B2050",
        componente: "Puerta Corrediza de Cristal/Patio (exterior)",
        unidad: "N",
      },
      { codigo: "B2050", componente: "Puerta de Cristal", unidad: "N" },
      { codigo: "B2050", componente: "Vinilo (exterior)", unidad: "N" },
    ],
  },
  {
    numero: 17,
    nombre: "Sistema de Alarma de Seguridad",
    componentes: [
      { codigo: "D7010", componente: "Sistema de Seguridad", unidad: "N" },
    ],
  },
  {
    numero: 23,
    nombre: "Sistema de Distribución Eléctrica",
    componentes: [
      { codigo: "D5020", componente: "Aluminio Desnudo", unidad: "N" },
      {
        codigo: "D5020",
        componente: "Aluminio Revestido de Cobre",
        unidad: "N",
      },
      { codigo: "D5020", componente: "Cobre Aislado", unidad: "N" },
      { codigo: "D5020", componente: "Cobre Desnudo", unidad: "N" },
      {
        codigo: "D5020",
        componente: "Conexiones Chapeadas de Cobre",
        unidad: "N",
      },
      { codigo: "D5020", componente: "Tablero", unidad: "N" },
    ],
  },
  {
    numero: 24,
    nombre: "Sistema de Generación de Electricidad",
    componentes: [
      {
        codigo: "D5010",
        componente: "Fotovoltaica (panel solar)",
        unidad: "N",
      },
      {
        codigo: "D5010",
        componente: "Generador (fuente principal)",
        unidad: "N",
      },
      {
        codigo: "D5010",
        componente: "Generador (modo de hibernación <300 horas/año)",
        unidad: "N",
      },
      {
        codigo: "D5010",
        componente: "Transformadores (Distribución de Energía)",
        unidad: "N",
      },
    ],
  },
  {
    numero: 25,
    nombre: "Sistema de Agua",
    componentes: [
      { codigo: "D2010", componente: "Línea de Agua (cobre)", unidad: "N" },
      {
        codigo: "D2010",
        componente: "Línea de Agua (galvanizada)",
        unidad: "N",
      },
      { codigo: "D2010", componente: "Línea de Agua (PEX)", unidad: "N" },
      { codigo: "D2010", componente: "Línea de Agua (plástica)", unidad: "N" },
      { codigo: "D2010", componente: "Suavizador de Agua", unidad: "N" },
    ],
  },
  {
    numero: 26,
    nombre: "Sistema de Drenaje Sanitario",
    componentes: [
      {
        codigo: "D2020",
        componente: "Bomba Trituradora para Drenaje con Macerador",
        unidad: "N",
      },
      {
        codigo: "D2020",
        componente: "Tubería de Hierro Fundido (bajo tierra)",
        unidad: "N",
      },
      {
        codigo: "D2020",
        componente: "Tubería de Hierro Fundido (sobre el suelo)",
        unidad: "N",
      },
      {
        codigo: "D2020",
        componente: "Tubería de Residuos ABS/PVC",
        unidad: "N",
      },
      {
        codigo: "D2020",
        componente: "Tubería de Residuos de Concreto",
        unidad: "N",
      },
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
    numero: 28,
    nombre: "Sistema de Generación de Calefacción",
    componentes: [
      { codigo: "D3020", componente: "Caldera", unidad: "N" },
      {
        codigo: "D3020",
        componente: "Calefactor Radiante Eléctrico",
        unidad: "N",
      },
      { codigo: "D3020", componente: "Calentador", unidad: "N" },
    ],
  },
  {
    numero: 29,
    nombre: "Sistema de Distribución HVAC",
    componentes: [
      { codigo: "D3050", componente: "Ductos", unidad: "N" },
      { codigo: "D3050", componente: "Línea de Agua (cobre)", unidad: "N" },
    ],
  },
  {
    numero: 30,
    nombre: "Equipo HVAC",
    componentes: [
      {
        codigo: "D3030",
        componente: "Aire Acondicionado (central) [Unidad Empaquetada]",
        unidad: "N",
      },
      { codigo: "D3030", componente: "Bomba de Calor", unidad: "N" },
      {
        codigo: "D3030",
        componente: "Enfriador Refrigerado por Agua",
        unidad: "N",
      },
      {
        codigo: "D3030",
        componente: "Enfriador Refrigerado por Aire",
        unidad: "N",
      },
      { codigo: "D3030", componente: "Panel de Control de HVAC", unidad: "N" },
      {
        codigo: "D3030",
        componente: "Serpentín Condensador (sección exterior de unidad de ac)",
        unidad: "N",
      },
      {
        codigo: "D3030",
        componente: "Serpentín Evaporador (sección interior de unidad de ac)",
        unidad: "N",
      },
      { codigo: "D3030", componente: "Torre de Enfriamiento", unidad: "N" },
      { codigo: "D3050", componente: "Manejadora de Aire", unidad: "N" },
      {
        codigo: "D3050",
        componente: "Unidad de Ventiloconvector",
        unidad: "N",
      },
      {
        codigo: "D3060",
        componente: "Unidad de Recuperación de Energía",
        unidad: "N",
      },
    ],
  },
  {
    numero: 31,
    nombre: "Extracción/Ventilación",
    componentes: [
      {
        codigo: "D3060",
        componente: "Extractores de Aire (comercial)",
        unidad: "N",
      },
      {
        codigo: "D3060",
        componente: "Extractores de Aire (para residencias/baños)",
        unidad: "N",
      },
      {
        codigo: "D3060",
        componente: "Ventiladores (Montados en Techo o Pared)",
        unidad: "N",
      },
      {
        codigo: "D3060",
        componente: "Ventiladores de Suministro de Aire Fresco",
        unidad: "N",
      },
    ],
  },
  {
    numero: 32,
    nombre: "Unidades de A/C",
    componentes: [
      {
        codigo: "D3030",
        componente: "Aire Acondicionado (a través de la pared)",
        unidad: "N",
      },
      {
        codigo: "D3030",
        componente: "Aire Acondicionado (en ventana)",
        unidad: "N",
      },
      { codigo: "D3030", componente: "Sistema de Mini-Split", unidad: "N" },
    ],
  },
  {
    numero: 33,
    nombre: "Sistema de Controles de Iluminación (en Instalaciones Grandes)",
    componentes: [
      { codigo: "D5040", componente: "Sistema Completo", unidad: "N" },
    ],
  },
  {
    numero: 35,
    nombre: "Sistema de Telefonía (en Instalaciones Grandes)",
    componentes: [
      { codigo: "D6020", componente: "Sistema Completo", unidad: "N" },
    ],
  },
  {
    numero: 36,
    nombre: "Sistema de Supresión de Incendios (en Instalaciones Grandes)",
    componentes: [
      {
        codigo: "D4010",
        componente: "Protección Contra Incendios y Sistemas de Rociadores",
        unidad: "N",
      },
    ],
  },
  {
    numero: 37,
    nombre: "Sistema de Seguridad (en Instalaciones Grandes)",
    componentes: [
      { codigo: "D7010", componente: "Sistema Completo", unidad: "N" },
    ],
  },
  {
    numero: 40,
    nombre: "Mitigador de Humedad, Subdrenaje de Edificio",
    componentes: [
      {
        codigo: "A6010",
        componente: "Drenaje Francés/Tubería Perforada",
        unidad: "L",
      },
      { codigo: "A6010", componente: "Relleno Granular", unidad: "L" },
      { codigo: "A6010", componente: "Tablero de Drenaje", unidad: "A" },
      { codigo: "A6010", componente: "Tejido de Filtro", unidad: "L" },
    ],
  },
  {
    numero: 49,
    nombre: "Sistema de Detección de Fuego y Alarma",
    componentes: [
      {
        codigo: "D7050",
        componente: "Sistema de Alarma Contra Incendios",
        unidad: "N",
      },
      {
        codigo: "D7050",
        componente: "Sistemas de Detectores de Humo/Calor (cableados)",
        unidad: "N",
      },
    ],
  },
  {
    numero: 56,
    nombre: "Elevadores",
    componentes: [{ codigo: "D1010", componente: "Elevadores", unidad: "N" }],
  },
  {
    numero: 58,
    nombre: "Aislación - Techo",
    componentes: [
      { codigo: "B3010", componente: "Cartón Espuma", unidad: "A" },
      { codigo: "B3010", componente: "Celulosa", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Fibra de Vidrio (expuesta)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Lana de Roca", unidad: "A" },
      { codigo: "B3010", componente: "Membrana Hidrofuga", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Papel Negro (papel fieltro)",
        unidad: "A",
      },
      { codigo: "B3010", componente: "Relleno Suelto", unidad: "A" },
      {
        codigo: "B3010",
        componente: "Rociado de Espuma Icynene (célula abierta)",
        unidad: "A",
      },
      {
        codigo: "B3010",
        componente: "Rollos de Fibra de Vidrio (empacado)",
        unidad: "A",
      },
    ],
  },
  {
    numero: 62,
    nombre: "Sistema de Aire Comprimido (Instalación Grande)",
    componentes: [
      { codigo: "D2050", componente: "Sistema Completo", unidad: "N" },
    ],
  },

  {
    numero: 64,
    nombre: "Sistema de Manejo/Controles de Edificios (Instalación Grande)",
    componentes: [
      { codigo: "D8010", componente: "Sistema Completo", unidad: "N" },
    ],
  },
];

export default catalogoCostos;
