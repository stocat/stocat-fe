import { green } from "./color.scale.css";

export const color = {
  primary: {
    light: green[50],
    lightHover: green[100],
    lightActive: green[200],

    normal: green[500],
    hover: green[600],
    active: green[700],

    dark: green[800],
    darkHover: green[900],
    darkActive: green[950],

    darker: green[1000],
  },
} as const;
