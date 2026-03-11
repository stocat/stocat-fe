import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "16px 20px",
  gap: "4px",
});

export const tagRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "4px",
});

export const tag = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "3px 10px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.blueGreen.normal,
  backgroundColor: vars.color.blueGreen.light,
  borderRadius: "20px",
});

export const stockName = style({
  fontSize: "24px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "4px",
});

export const priceGroup = style({
  display: "flex",
  alignItems: "baseline",
  gap: "8px",
});

export const price = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
});

export const changePositive = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#E54D4D",
});

export const changeNegative = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#4D7AE5",
});


