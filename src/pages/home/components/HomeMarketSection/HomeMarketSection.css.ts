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
  background: "#ffffff",
});

export const sectionTitle = style({
  width: "100%",
  fontSize: 14,
  fontWeight: 700,
  color: vars.color.grey[800],
});

export const verticalList = style({});
