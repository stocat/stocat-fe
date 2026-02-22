import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.5px 8px",
  borderRadius: "20px",
  fontSize: "11px",
  fontWeight: 500,
  lineHeight: 1.5,
  whiteSpace: "nowrap",
  backgroundColor: vars.color.blueGreen.light,
  color: vars.color.blueGreen.dark,
});

export const variant = styleVariants({
  sector: [base],
  industry: [base],
});
