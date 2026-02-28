import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const viewport = style({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.grey[100],
});

export const mobileFrame = style({
  width: "394px",
  height: "auto",
  backgroundColor: "white",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const content = style({
  overflowY: "auto",
  paddingBottom: "64px",
});
