import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

export const title = style({
  ...vars.typography.body1,
  color: vars.color.role.subtext,
});

export const rateRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: 8,
});

export const rateValue = style({
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "150%",
  color: vars.color.role.text,
});

export const tabList = style({
  display: "flex",
  gap: 4,
  marginTop: 20,
});

export const tab = style({
  padding: "4px 10px",
  ...vars.typography.label2,
  color: vars.color.role.subtext,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

export const tabActive = style({
  fontWeight: 700,
  color: vars.color.role.text,
  borderBottom: `2px solid ${vars.color.role.subtext}`,
});

export const dateText = style({
  ...vars.typography.label2,
  color: vars.color.role.grey,
  marginTop: 6,
});

export const chartPlaceholder = style({
  width: "100%",
  height: 219,
  marginTop: 4,
  backgroundColor: vars.color.role.background,
  border: `1px solid ${vars.color.role.line}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const chartPlaceholderText = style({
  ...vars.typography.caption2,
  color: vars.color.role.grey,
});
