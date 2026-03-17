import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "24px 16px",
  display: "flex",
  flexDirection: "column",
  gap: 24,
  boxSizing: "border-box",
  borderTopWidth: 8,
  borderTopStyle: "solid",
  borderTopColor: vars.color.role.background2,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const title = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const itemList = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
