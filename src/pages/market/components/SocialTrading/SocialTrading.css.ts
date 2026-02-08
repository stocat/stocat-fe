import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",
  borderRadius: "12px",
  backgroundColor: vars.color.grey[50],
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
  marginBottom: "12px",
});
