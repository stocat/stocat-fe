import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",
  backgroundColor: vars.color.grey[50],
  marginLeft: "-16px", 
  marginRight: "-16px",
});

export const title = style({
  fontSize: "12px",
  fontWeight: 500,
  color: vars.color.grey[700],
  margin: 0,
  marginLeft: "12px",
});
