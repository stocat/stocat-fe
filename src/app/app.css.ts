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
  height: "814px",
  backgroundColor: "white",
  overflow: "hidden",
});
