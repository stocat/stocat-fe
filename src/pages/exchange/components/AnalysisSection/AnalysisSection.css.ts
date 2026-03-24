import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "24px 16px",
  backgroundColor: vars.color.role.background,
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const title = style({
  ...vars.typography.body1,
  color: vars.color.role.text,
});

export const cardList = style({
  display: "flex",
  flexDirection: "row",
  gap: 8,
});

export const card = style({
  flex: 1,
  borderRadius: 16,
  overflow: "hidden",
  position: "relative",
  aspectRatio: "1 / 1",
  backgroundColor: vars.color.role.background2,
});

export const cardDescription = style({
  ...vars.typography.label2,
  color: vars.color.role.text,
  position: "absolute",
  top: 50,
  left: 0,
  right: 0,
  padding: "0 16px",
});

export const cardLink = style({
  ...vars.typography.label2,
  color: vars.color.role.subtext,
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "underline",
});
