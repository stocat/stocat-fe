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
  ...vars.typography.label1,
  color: vars.color.role.subtext,

  borderRadius: 100,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: vars.color.role.line,
});

globalStyle(`${badgeList} > button[aria-selected="true"]`, {
  backgroundColor: vars.color.role.background2,
  border: "none",
});

export const contentList = style({
  height: "fit-content",
  maxHeight: 260,
  overflowY: "auto",
});
