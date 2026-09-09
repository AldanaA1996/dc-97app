# dc-97app

Aplicación construida con Next.js para gestionar una evaluación y generación de documentos relacionados con costos y elementos del proyecto.

## Requerimientos

- Node.js 20+
- pnpm

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Acceso

La aplicación incluye un bloqueo básico sin base de datos. Copia `.env.example` a `.env.local` y define `LOGIN_PASSWORD` antes de iniciar el servidor.

## Organización recomendada

La estructura actual ya tiene una buena base, pero conviene separar mejor el dominio de la UI y la lógica de negocio.

```text
src/
├── app/                 # rutas y layouts de Next.js
├── components/          # ui reutilizable y layout
├── context/             # providers globales
├── data/                # catalogos y datos base
├── features/
│   └── evaluacion/     # lógica y componentes del flujo principal
├── hooks/               # hooks compartidos
├── lib/                 # helpers
├── pdf/                 # generación de PDFs
├── store/               # estado global
├── types/               # tipos del proyecto
└── ...
```

Para una guía más detallada, revisa [docs/estructura-proyecto.md](docs/estructura-proyecto.md).

## Sugerencia de migración

1. Mover los formularios de evaluación a `src/features/evaluacion/components`.
2. Separar la lógica de validación y cálculos en `src/features/evaluacion/lib`.
3. Mantener `src/components/ui` como biblioteca visual reusable.
4. Usar rutas absolutas con `@/src/...` para evitar imports relativos largos.

## Estado del proyecto

El proyecto está funcional y la base de la app ya está montada. El siguiente paso recomendado es consolidar la estructura de feature para que crezca sin mezclar responsabilidades.
