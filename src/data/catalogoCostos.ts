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
    numero: 56,
    nombre: "Elevadores",
    componentes: [{ codigo: "D1010", componente: "Elevadores", unidad: "N" }],
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
    numero: 62,
    nombre: "Sistema de Aire Comprimido (Instalación Grande)",
    componentes: [
      { codigo: "D2050", componente: "Sistema Completo", unidad: "N" },
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
  {
    numero: 64,
    nombre: "Sistema de Manejo/Controles de Edificios (Instalación Grande)",
    componentes: [
      { codigo: "D8010", componente: "Sistema Completo", unidad: "N" },
    ],
  },
];

export default catalogoCostos;
