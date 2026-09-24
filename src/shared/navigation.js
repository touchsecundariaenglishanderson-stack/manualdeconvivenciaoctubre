/**
 * Navegación principal del panel.
 *
 * Mantener estos identificadores estables permite que cada feature evolucione
 * sin romper los enlaces internos ni el estado de la vista activa.
 */
export const NAV_ITEMS = [
  { id: "home", label: "Inicio", icon: "home", badge: null },
  { id: "conviv", label: "Manual de Convivencia", icon: "book", badge: "3" },
  { id: "calendar", label: "Calendario", icon: "calendar", badge: null },
  { id: "planner", label: "Planeador de Clase", icon: "plan", badge: null },
  { id: "stats", label: "Estadísticas", icon: "chart", badge: null },
  { id: "analytics", label: "Analíticas Pedagógicas", icon: "brain", badge: null },
  { id: "settings", label: "Configuración", icon: "settings", badge: null },
  { id: "logout", label: "Cerrar sesión", icon: "logout", badge: null },
];

export const FULLSCREEN_MODULES = ["conviv", "calendar", "planner"];

export const PAGE_TITLES = {
  home: "Inicio",
  conviv: "Manual de Convivencia",
  calendar: "Calendario",
  planner: "Planeador",
  stats: "Estadísticas",
  analytics: "Analíticas",
  settings: "Configuración",
  logout: "Sesión",
};
