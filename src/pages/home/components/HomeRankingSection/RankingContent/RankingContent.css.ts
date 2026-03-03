import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "20px 16px",
  minWidth: 358,
  width: "100%",
  minHeight: 76,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: vars.color.role.background,
});

export const titleContainer = style({
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const iconWrapper = style({
  width: 44,
  height: 44,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const rank = style({
  color: vars.color.role.grey,
  ...vars.typography.caption3,
});

export const title = style({
  color: vars.color.role.text,
  ...vars.typography.body3,
});

export const currentUserContainer = style({
  background: vars.color.role.background2,
  borderRadius: 12,
});
