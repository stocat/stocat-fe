import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "0px",

});

export const title = style({
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
  marginBottom: "12px",
});

export const stockList = style({
  display: "flex",
  flexDirection: "column",
});
