export const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
export const GRADOS = ["Grado 6 y 7", "Grado 8", "Grado 9", "Grado 10 y 11"];
export const COLS = ["Recordar", "Comprender", "Aplicar", "Analizar", "Evaluar", "Crear"];
export const INST = "Institución Educativa La Amistad";
export const ASIGN = "Inglés";

export const P = {
  dark: "#1E1B4B",
  mid: "#3C3489",
  main: "#534AB7",
  light: "#EEEDFE",
  border: "rgba(83,74,183,0.18)",
  gray: "#F5F5F8",
  text: "#1A1A2E",
};

export const SEMANAS_POR_MES = [1, 4, 4, 4, 4, 2, 4, 4, 4, 4, 3];
export const PERIOD_BY_MONTH = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4];

export const PERIOD_COLORS = {
  1: { name: "Primer período", dark: "#1B3A6B", mid: "#2C5AA0", main: "#3B7DD8", light: "#E8F1FC", text: "#1B3A6B" },
  2: { name: "Segundo período", dark: "#2E6B5E", mid: "#4FA38D", main: "#7BC4AE", light: "#EAF8F3", text: "#1F5045" },
  3: { name: "Tercer período", dark: "#9A5A1E", mid: "#C97D2E", main: "#E8A356", light: "#FFF3E4", text: "#7A4615" },
  4: { name: "Cuarto período", dark: "#5B3B82", mid: "#8462B0", main: "#AD8DD6", light: "#F3EDFB", text: "#4A2F6B" },
};

export function crearSemanas(cantidad) {
  return Array.from({ length: cantidad }, () => ({
    tema: "",
    fechaSemana: "",
    filas: [{ nota: "1", cells: Array(6).fill("") }],
  }));
}

export const CELL_STYLE = {
  border: "none",
  background: "transparent",
  outline: "none",
  width: "100%",
  resize: "none",
  lineHeight: 1.5,
  padding: "4px 6px",
  fontSize: 11,
  fontFamily: "inherit",
  color: P.text,
};
