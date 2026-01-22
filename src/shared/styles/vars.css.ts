import { createTheme } from "@vanilla-extract/css";
import { color } from "./color.semantic.css";

export const [themeClass, vars] = createTheme({
  color: {
    green: color.green,
    blue: color.blue,
    blueGreen: color.blueGreen,
    grey: color.grey,
  },
});
