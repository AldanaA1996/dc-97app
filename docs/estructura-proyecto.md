# Estructura recomendada del proyecto

Este proyecto tiene una base sólida de Next.js con UI reutilizable y lógica de evaluación. La organización actual funciona, pero conviene separar claramente dominio, UI compartida y páginas para evitar que crezca sin control.

## Organización objetivo

```text
src/
├── app/                     # rutas y layouts de Next.js
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── elemento/
│   ├── evaluacion/
│   ├── glosario/
│   └── mapa/
├── components/              # componentes reutilizables generales
│   ├── layout/
│   └── ui/
├── features/
│   └── evaluacion/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       ├── types/
│       └── data/
├── context/                 # providers globales
├── data/                    # catálogos y datasets
├── hooks/                   # hooks generales compartidos
├── lib/                     # helpers, utilidades, cn, etc.
├── store/                   # estado global / zustand
├── types/                   # tipos del proyecto
└── pdf/                     # utilidades de generación de PDF
```

## Convenciones recomendadas

### 1) Páginas
- Todo lo que pertenece a rutas de Next.js va en `src/app`.
- Las páginas deben ser delgadas: solo renderizan secciones y delegan la lógica al feature.

### 2) Features
- La funcionalidad principal de evaluación debe moverse a `src/features/evaluacion`.
- Dentro de ese feature, cada subárea debe seguir una separación clara:
  - `components/`: formularios y vistas
  - `hooks/`: lógica reutilizable
  - `lib/`: transformaciones/calculaciones
  - `data/`: catalogos y constantes
  - `types/`: tipos del feature

### 3) Componentes compartidos
- `src/components/ui` debe contener solo elementos visuales reutilizables y sin dominio.
- `src/components/layout` debe contener barras, wrappers, estructura visual general.

### 4) Estado y contexto
- `src/context` y `src/store` deben quedarse para estado global o provider.
- Evitar lógica de negocio en los componentes directamente.

### 5) Nomenclatura
- Usa nombres consistentes: `DatosFormulario`, `EvaluacionContext`, `catalogoCostos`, `utils.ts`.
- Evita nombres con mezcla de español/inglés en el mismo módulo.
- Prioriza archivos con responsabilidad única.

## Recomendación de migración gradual

1. Crear el feature `src/features/evaluacion`.
2. Mover `src/components/forms/*` a ese feature.
3. Mover `src/data/*` y tipos asociados al feature si solo pertenecen a evaluación.
4. Dejar `src/components/ui` como capa visual compartida.
5. Reorganizar imports para usar alias `@/src/...` y evitar rutas relativas largas.

## Regla práctica para mantener el orden

- Si un archivo solo sirve a una página o flujo, colocarlo junto al feature.
- Si un archivo sirve a varias rutas o pantallas, dejarlo en `components/ui`, `lib` o `context`.
- Si un archivo genera PDF, cálculo o validación compleja, moverlo a `features/evaluacion/lib` o `pdf` según corresponda.

## Resultado esperado

Con esta organización, el proyecto será más fácil de escalar, testear y mantener. El código estará segmentado por responsabilidad y cada parte tendrá un lugar definido.
