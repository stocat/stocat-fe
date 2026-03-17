import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "20px 16px",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  boxSizing: "border-box",
});

export const period = style({
  ...vars.typography.caption1,
  color: vars.color.role.subtext,
});

export const balanceRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const balanceInfo = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: 8,
  flex: 1,
});

export const totalBalance = style({
  ...vars.typography.h1,
  color: vars.color.role.text,
});

export const summaryRow = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginTop: 4,
});

export const summaryLine = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const summaryLabel = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const summaryItem = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});
