import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "24px 16px",
  backgroundColor: vars.color.role.background,
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const title = style({
  ...vars.typography.body1,
  color: vars.color.role.text,
});

export const contentCard = style({
  width: "100%",
  minHeight: 120,
  borderRadius: 16,
  backgroundColor: vars.color.role.background2,
  padding: "30px 24px",
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const commentItem = style({
  display: "flex",
  gap: 20,
  alignItems: "flex-start",
});

export const avatar = style({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: vars.color.role.line,
  flexShrink: 0,
});

export const commentBody = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const nickname = style({
  ...vars.typography.label1,
  color: vars.color.role.subtext,
});

export const content = style({
  ...vars.typography.label2,
  color: vars.color.role.text,
});

export const indicatorRow = style({
  width: "100%",
  height: 20,
  borderRadius: 16,
  backgroundColor: vars.color.role.background2,
  marginTop: -6,
});
