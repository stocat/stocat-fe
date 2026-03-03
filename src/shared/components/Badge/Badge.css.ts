import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const badge = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  padding: "3px 8px 2px",
  borderRadius: 40,
  ...vars.typography.caption2,
  backgroundColor: `color-mix(in srgb, ${vars.color.role.secondary} 5%, transparent)`,
  color: vars.color.role.secondary,
});
