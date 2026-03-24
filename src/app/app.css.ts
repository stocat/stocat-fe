import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const viewport = style({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: vars.color.grey[100],
});

export const mobileFrame = style({
  position: "relative",
  width: "394px",
  minHeight: "100dvh",
  backgroundColor: "white",
  overflowX: "clip",
  display: "flex",
  flexDirection: "column",
});

export const content = style({
  overflowY: "auto",
  paddingBottom: "calc(80px + env(safe-area-inset-bottom))",
});

export const contentNoPadding = style([
  content,
  { paddingBottom: 0 },
]);
