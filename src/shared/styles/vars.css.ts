import { createTheme } from "@vanilla-extract/css";
import { color } from "./color.semantic.css";
import { typography } from "./typography.css";

export const [themeClass, vars] = createTheme({
  color: {
    accent: color.accent,
    green: color.green,
    blue: color.blue,
    blueGreen: color.blueGreen,
    grey: color.grey,
    role: color.role,
  },
  typography,
});
