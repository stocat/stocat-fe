import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "10px",
  fontWeight: 500,
  lineHeight: 1.4,
});

export const variant = styleVariants({
  sector: [
    base,
    {
      backgroundColor: vars.color.grey[100],
      color: vars.color.grey[700],
      border: `1px solid ${vars.color.grey[200]}`,
    },
  ],
  industry: [
    base,
    {
      backgroundColor: "transparent",
      color: vars.color.grey[500],
      border: "none",
    },
  ],
});
