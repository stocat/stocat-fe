import { vars } from "@/shared/styles/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const sortRow = style({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  justifyContent: "flex-end",
  boxSizing: "border-box",
});

export const sortButton = style({
  ...vars.typography.body5,
  color: vars.color.role.subtext,
  backgroundColor: vars.color.role.background,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: vars.color.role.line,
  borderRadius: 9999,
  padding: "4px 12px",
  cursor: "pointer",
});


export const tabList = style({
  display: "flex",
  width: "100%",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: vars.color.role.line,
});

export const tab = style({
  flex: 1,
  paddingTop: 10,
  paddingBottom: 10,
  ...vars.typography.label1,
  color: vars.color.role.subtext,
  backgroundColor: "transparent",
  border: "none",
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "transparent",
  cursor: "pointer",
  textAlign: "center",
  marginBottom: -1,
});

globalStyle(`${tab}[aria-selected="true"]`, {
  color: vars.color.role.text,
  borderBottomColor: vars.color.role.text,
});

export const contentList = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
