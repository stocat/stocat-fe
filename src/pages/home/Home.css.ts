import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
});

export const bar = style({
  height: "5px",
  marginLeft: "-16px",
  marginRight: "-16px",
  backgroundColor: vars.color.grey[300],
});
