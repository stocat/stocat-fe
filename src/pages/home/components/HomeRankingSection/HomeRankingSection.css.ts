import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "24px 16px",
  width: "100%",
  minHeight: 360,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  background: vars.color.role.background,
});

export const sectionTitle = style({
  width: "100%",
  ...vars.typography.subtitle3,
});
