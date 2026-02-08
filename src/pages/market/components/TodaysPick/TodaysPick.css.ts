import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px",

});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
  marginBottom: "12px",
});

export const stockList = style({
  display: "flex",
  flexDirection: "column",
});
