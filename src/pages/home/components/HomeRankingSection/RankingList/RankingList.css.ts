import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const scrollableList = style({
  width: "100%",
  height: 252,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  overflowY: "auto",
});
