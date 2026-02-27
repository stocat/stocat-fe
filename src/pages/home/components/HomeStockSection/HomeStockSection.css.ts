import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  minHeight: 360,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  background: "#ffffff",
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 16,
  paddingRight: 16,
});

export const ctaMyStocks = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const ctaMyStockTitle = style({
  fontSize: 12,
  fontWeight: 600,
  color: vars.color.grey[800],
  lineHeight: "150%",
});

export const ctaMyStockVector = style({
  paddingBottom: 2.5,
});

export const balanceContainer = style({
  marginTop: 8,
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  gap: 8,
});

export const currentBalance = style({
  fontSize: 24,
  fontWeight: 700,
  color: "#1a1a1a",
  lineHeight: "150%",
});

export const currentVariation = style({
  paddingBottom: 4,
  fontSize: 16,
  fontWeight: 500,
  color: "#FF383C",
  lineHeight: "150%",
});
