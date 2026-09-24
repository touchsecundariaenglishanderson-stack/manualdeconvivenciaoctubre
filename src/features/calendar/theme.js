import { Users, BookOpen, MapPin, Star, ClipboardList, GraduationCap, Sun } from "lucide-react";

export const TAGS = {
  reunion: { label: "Reunión", color: "#3E5C76", Icon: Users },
  academico: { label: "Académico", color: "#A66A1E", Icon: BookOpen },
  salida: { label: "Salida pedagógica", color: "#3B6E4E", Icon: MapPin },
  especial: { label: "Día especial", color: "#A8456B", Icon: Star },
  admin: { label: "Administrativo", color: "#6B5F4F", Icon: ClipboardList },
};

export const PERIODO_STYLE = {
  lectivo: { bg: "#E7EFE6", border: "#3B6E4E", Icon: GraduationCap },
  receso: { bg: "#F3E7CB", border: "#A66A1E", Icon: Sun },
  mixto: { bg: "#EFE3D6", border: "#B23A2E", Icon: Sun },
};

export const DIAS_SEMANA = ["L", "M", "M", "J", "V", "S", "D"];

export const MES_COLORES = [
  "#1F3A5F", "#7B2D42", "#5B7553", "#C2703D", "#C99A2E", "#2F6F6B",
  "#9C4221", "#2C5F74", "#6B4570", "#B5651D", "#3B6E4E", "#8C1C3F",
];

export function construirGrilla(monthIndex) {
  const year = 2026;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = Array.from({ length: (firstDay + 6) % 7 }, () => null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function matizClaro(hex, cantidad) {
  const num = parseInt(hex.slice(1), 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const mezclar = (color) => Math.round(color + (255 - color) * cantidad);
  return `rgb(${mezclar(r)}, ${mezclar(g)}, ${mezclar(b)})`;
}

export function esFondoOscuro(hex) {
  const num = parseInt(hex.slice(1), 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.58;
}
