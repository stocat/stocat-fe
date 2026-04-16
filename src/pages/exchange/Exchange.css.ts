import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  paddingBottom: 80,
  backgroundColor: vars.color.role.background2,
});

export const whiteSection = style({
  backgroundColor: vars.color.role.background,
});
