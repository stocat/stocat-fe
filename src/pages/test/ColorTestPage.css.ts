import { style } from "@vanilla-extract/css";

export const page = style({
  display: "grid",
  gap: 32,
  padding: 24,
  height: "100vh",

  overflow: "scroll",
});

export const section = style({
  display: "grid",
  gap: 12,
});

export const title = style({
  fontSize: 18,
  fontWeight: 600,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: 12,
});

export const colorCard = style({
  height: 64,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  fontSize: 13,
  fontWeight: 500,
  color: "white",
});
