import { style } from "@vanilla-extract/css";

export const viewport = style({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
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
  flex: 1,
  overflowY: "auto",
});
