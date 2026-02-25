import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  position: "relative",
  borderRadius: 16,
  minWidth: 360,
  height: 138,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: vars.color.blueGreen.light,
  minHeight: 120,
});

export const textArea = style({
  zIndex: 4,
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const label = style({
  margin: 0,
  fontSize: 11,
  fontWeight: "500",
  lineHeight: "150%",
  color: vars.color.blueGreen.dark,
});

export const title = style({
  margin: 0,
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "150%",
  textAlign: "center",
  color: "#303030",
});

export const circleTopRight = style({
  position: "absolute",
  zIndex: 3,
  width: 330,
  height: 330,
  borderRadius: "50%",
  bottom: 0,
  right: 0,
  background:
    "radial-gradient(circle, rgba(255,255,255, 1) 0%, rgba(255,255,255, 0) 48%, rgba(255,255,255, 0) 60%, rgba(255,255,255, 1) 100%)",
});

export const circleBottomLeft = style({
  position: "absolute",
  zIndex: 1,
  width: 290,
  height: 290,
  borderRadius: "50%",
  top: 40,
  right: 100,
  opacity: 0.3,
  background:
    "radial-gradient(circle, #C3FBFF 0%, #ECF6FF 38%, #4999FC 71%, #0059C7 100%)",
});

export const circleBottomRight = style({
  position: "absolute",
  zIndex: 2,
  width: 196,
  height: 196,
  borderRadius: "50%",
  top: 60,
  right: -40,
  opacity: 0.5,
  background: "radial-gradient(circle, #B2FFF9 0%, #00AB91 68%, #007379 100%)",
});
