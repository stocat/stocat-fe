import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "14px 16px",
  backgroundColor: "rgba(0, 143, 153, 0.1)",
  boxSizing: "border-box",
  marginTop: 8,
  textAlign: "center",
});

export const text = style({
  ...vars.typography.body3,
  color: vars.color.role.subcolor,
});
