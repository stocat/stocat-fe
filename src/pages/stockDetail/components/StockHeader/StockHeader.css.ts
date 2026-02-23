import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "16px 20px",
});

export const stockName = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
});

export const priceContainer = style({
  display: "flex",
  alignItems: "baseline",
  gap: "8px",
  textAlign: "right",
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

export const changeNeutral = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[500],
});
