import { style } from "@vanilla-extract/css";

export const base = style({
  borderRadius: "50%",
  flexShrink: 0,
  objectFit: "cover",
});

export const fallback = style([
  base,
  {
    backgroundColor: "#FEF2F2",
  },
]);
