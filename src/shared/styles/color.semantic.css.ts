import { green, blue, grey, blueGreen } from "./color.scale.css";

export const color = {
  green: {
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

  blue: {
    light: blue[50],
    lightHover: blue[100],
    lightActive: blue[200],

    normal: blue[500],
    hover: blue[600],
    active: blue[700],

    dark: blue[800],
    darkHover: blue[900],
    darkActive: blue[950],

    darker: blue[1000],
  },

  blueGreen: {
    light: blueGreen[50],
    lightHover: blueGreen[100],
    lightActive: blueGreen[200],

    normal: blueGreen[500],
    hover: blueGreen[600],
    active: blueGreen[700],

    dark: blueGreen[800],
    darkHover: blueGreen[900],
    darkActive: blueGreen[950],

    darker: blueGreen[1000],
  },

  grey,
} as const;
