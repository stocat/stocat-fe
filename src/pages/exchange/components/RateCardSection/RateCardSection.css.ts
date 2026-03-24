import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",
  display: "flex",
  gap: 12,
});

export const card = style({
  flex: 1,
  padding: "16px 20px",
  backgroundColor: vars.color.role.background,
  border: `1px solid ${vars.color.role.line}`,
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const cardTitleRow = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const cardCurrency = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const cardRate = style({
  ...vars.typography.subtitle3,
  fontWeight: 700,
  color: vars.color.role.text,
});
