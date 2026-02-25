import { vars } from "@/shared/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 12,
});

export const badgeList = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
});

globalStyle(`${badgeList} > button`, {
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 12,
  paddingRight: 12,

  width: "fit-content",
  height: 30,
  fontSize: 12,
  fontWeight: 700,
  color: vars.color.grey[800],

  borderRadius: 100,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: vars.color.grey[100],
});

globalStyle(`${badgeList} > button[aria-selected="true"]`, {
  backgroundColor: "#F6F6F6",
  border: "none",
});
