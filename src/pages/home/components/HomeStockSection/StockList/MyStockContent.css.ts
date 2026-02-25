import { vars } from "@/shared/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const badgeList = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
});

globalStyle(`${badgeList} > button`, {});
