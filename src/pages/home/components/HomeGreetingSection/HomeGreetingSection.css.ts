import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  minHeight: 360,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#ffffff",
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
  background: "#ffffff",
});

export const title = style({
  width: "100%",
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "150%",
  color: vars.color.grey[900],
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
});

export const subTitle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  background: "#ffffff",
  fontSize: 12,
  fontWeight: 500,
  color: vars.color.grey[400],
});
