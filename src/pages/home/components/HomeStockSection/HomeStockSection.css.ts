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
  background: vars.color.role.background,
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
  ...vars.typography.caption2,
  color: vars.color.role.subtext,
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
  ...vars.typography.h1,
  color: vars.color.role.text,
});

export const currentVariation = style({
  paddingBottom: 4,
  ...vars.typography.body2,
  color: "#FF383C",
});
