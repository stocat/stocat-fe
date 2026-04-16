import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  height: 45,
  padding: "0 20px",
  backgroundColor: vars.color.role.background2,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const label = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});
