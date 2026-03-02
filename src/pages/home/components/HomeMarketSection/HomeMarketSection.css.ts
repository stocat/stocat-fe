import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 16,
  paddingRight: 16,
  width: "100%",
  minHeight: 360,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  background: vars.color.role.background,
});

export const sectionTitle = style({
  width: "100%",
  ...vars.typography.body3,
  color: vars.color.role.subtext,
});

export const verticalList = style({});
