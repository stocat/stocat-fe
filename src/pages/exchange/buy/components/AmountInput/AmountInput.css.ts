import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  flex: 1,
  backgroundColor: vars.color.role.background,
  padding: "20px 16px 32px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const hint = style({
  ...vars.typography.caption1,
  color: vars.color.role.grey,
});

export const hintLabel = style({
  ...vars.typography.body3,
  color: vars.color.role.grey,
});

export const hintDivider = style({
  fontSize: "12px",
  fontWeight: "500",
  color: vars.color.role.grey,
});

export const placeholder = style({
  ...vars.typography.h1,
  color: vars.color.role.text,
});

export const cardArea = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
});

export const card = style({
  width: "100%",
  height: 80,
  backgroundColor: vars.color.role.background2,
  borderRadius: 12,
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const flag = style({
  width: 32,
  height: 24,
  flexShrink: 0,
  borderRadius: 2,
  overflow: "hidden",
});

export const cardRight = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 2,
});

export const cardAmount = style({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "150%",
  color: vars.color.role.text,
});

export const cardAmountEmpty = style({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "150%",
  color: vars.color.role.grey,
});

export const cardSub = style({
  ...vars.typography.body3,
  color: vars.color.role.grey,
});

export const swapIcon = style({
  width: 11,
  height: 16,
  margin: "8px auto",
});

export const errorText = style({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "150%",
  color: vars.color.accent.red,
});

export const errorSub = style({
  ...vars.typography.body3,
  color: vars.color.role.grey,
});
