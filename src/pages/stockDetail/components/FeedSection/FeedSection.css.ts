import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  backgroundColor: "#ffffff",
  paddingBottom: "80px",
});

export const header = style({
  padding: "16px 20px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
});
