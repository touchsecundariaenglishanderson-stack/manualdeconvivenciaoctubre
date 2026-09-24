# Panel de control docente

Aplicación React + Vite para la gestión docente de la I.E. La Amistad.
Esta es la versión de control docente, separada de la aplicación [Juegos
ICFES](../Juegos%20ICFES/README.md).

## Estructura

```text
src/
├── app/
│   └── PanelDocente.jsx       # Composición actual del panel y matriz visual
├── features/
│   ├── manual/                # Manual de convivencia y ruta RAI
│   │   ├── config.js          # Pestañas, estilos y metadatos del manual
│   │   └── storage.js         # Persistencia local del manual
│   ├── calendar/              # Calendario institucional
│   │   └── theme.js           # Colores, etiquetas y utilidades del calendario
│   ├── planner/               # Planeador de clase
│   │   └── theme.js           # Periodos, grados, paleta, matriz y utilidades
│   └── games/                 # Panel de juegos docente y estudiantil
│       ├── data.js            # Ranking, botones y barras de juegos
│       └── studentConfig.js   # Tema y persistencia del juego estudiantil
├── shared/                    # Elementos reutilizables entre módulos
│   ├── navigation.js         # Menú, títulos y modo de pantalla completa
│   ├── dashboard.js          # Datos visuales de la pantalla de inicio
│   └── colombiaCalendar.js   # Fecha actual y festivos de Colombia
├── assets/
├── App.jsx                    # Punto de entrada estable
└── main.jsx
```

Los módulos funcionales ya tienen una entrada propia por dominio. Los juegos
ICFES fueron retirados de la navegación, las páginas activas y el flujo del
panel docente. La carpeta hermana `Juegos ICFES` es la aplicación operativa
para esa funcionalidad.

El archivo histórico `PanelDocente.jsx` conserva algunos componentes internos
no montados para facilitar la migración sin pérdida de datos; no se exportan
ni se muestran desde el panel de control.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación y producción

```bash
npm run lint
npm run build
npm run preview
```

## GitHub y Vercel

En Vercel, configura `MiProyecto` como **Root Directory** si el repositorio
contiene esta carpeta dentro de un directorio superior. Los comandos estándar
son:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

La publicación a GitHub debe realizarse desde el repositorio que contiene
`MiProyecto`; esta copia de trabajo no incluye una carpeta `.git`.
