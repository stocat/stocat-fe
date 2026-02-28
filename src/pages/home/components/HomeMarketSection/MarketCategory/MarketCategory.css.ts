import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  overflowX: "auto",
  scrollbarWidth: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const gridBase = style({
  width: "fit-content",
  display: "grid",
  gap: 8,
});

export const grid = styleVariants({
  horizontal: [
    gridBase,
    {
      gridTemplateRows: "repeat(2, auto)",
      gridAutoFlow: "column",
      gridAutoColumns: 260,
    },
  ],
  vertical: [
    gridBase,
    {
      gridTemplateRows: "1fr",
      gridAutoFlow: "column",
      gridAutoColumns: 160,
    },
  ],
});
