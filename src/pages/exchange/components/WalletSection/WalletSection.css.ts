import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  ...vars.typography.label1,
  color: vars.color.role.subtext,
});

export const timestamp = style({
  ...vars.typography.caption2,
  color: vars.color.role.grey,
});

export const pillList = style({
  display: "flex",
  gap: 8,
});

export const pill = style({
  flex: 1,
  height: 63,
  padding: "0 16px",
  backgroundColor: vars.color.role.background2,
  borderRadius: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const pillLabel = style({
  ...vars.typography.body4,
  color: vars.color.role.grey,
});

export const pillValue = style({
  ...vars.typography.body3,
  fontWeight: 700,
  color: vars.color.role.text,
});
