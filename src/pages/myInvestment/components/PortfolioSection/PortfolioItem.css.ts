import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 16,
  paddingBottom: 16,
  boxSizing: "border-box",
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const dot = style({
  width: 20,
  height: 20,
  borderRadius: "50%",
  flexShrink: 0,
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const name = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
});

export const amount = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const right = style({
  display: "flex",
  alignItems: "center",
});

export const percent = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
  minWidth: 40,
  textAlign: "right",
});
