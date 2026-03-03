import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: "white",
});

export const section = style({
  backgroundColor: "#ffffff",
  marginBottom: "8px",
});

export const sectionPadding = style({
  padding: "16px 20px",
});

export const divider = style({
  height: "8px",
  backgroundColor: vars.color.grey[100],
});
