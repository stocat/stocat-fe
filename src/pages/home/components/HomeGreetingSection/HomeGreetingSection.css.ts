import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  minHeight: 360,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: vars.color.role.background,
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 16,
  paddingRight: 16,
});

export const textArea = style({
  marginTop: 24,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  gap: 4,
  background: vars.color.role.background,
});

export const title = style({
  width: "100%",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: "150%",
  color: vars.color.role.text,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
});

export const subTitle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  background: vars.color.role.background,
  ...vars.typography.caption1,
  color: vars.color.role.grey,
});
