import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css";

export const box = style({
  backgroundColor: vars.color.primary.normal,
  color: "#fff",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primary.hover,
    },
    "&:active": {
      backgroundColor: vars.color.primary.active,
    },
  },
});
