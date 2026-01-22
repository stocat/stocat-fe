import { createTheme } from "@vanilla-extract/css";
import { color } from "./color.semantic.css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: {
      light: color.primary.light,
      lightHover: color.primary.lightHover,
      lightActive: color.primary.lightActive,

      normal: color.primary.normal,
      hover: color.primary.hover,
      active: color.primary.active,

      dark: color.primary.dark,
      darkHover: color.primary.darkHover,
      darkActive: color.primary.darkActive,

      darker: color.primary.darker,
    },
  },
});
