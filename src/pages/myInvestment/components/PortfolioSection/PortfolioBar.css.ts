import { style } from "@vanilla-extract/css";

export const bar = style({
  width: "100%",
  height: 32,
  display: "flex",
  overflow: "hidden",
});

export const segment = style({
  height: "100%",
  flexShrink: 0,
});
