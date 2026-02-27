import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const card = style({
  flex: 1,
  minHeight: "120px",
  backgroundColor: vars.color.grey[50],
  borderRadius: "16px",
  padding: "16px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
  overflow: "hidden",
  position: "relative",
});

export const label = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.grey[900],
  whiteSpace: "pre-line",
  lineHeight: 1.5,
  position: "relative",
  zIndex: 1,
});

export const decoration = style({
  position: "absolute",
  bottom: "-50px",
  right: "-50px",
  width: "150px",
  height: "150px",
  borderRadius: "50%",


  background: "linear-gradient(223.57deg, #FFFFFF 23.03%, rgba(255, 255, 255, 0) 51.61%, rgba(255, 255, 255, 0) 59.12%, #FFFFFF 83.08%)",

  userSelect: "none",
  pointerEvents: "none",
});