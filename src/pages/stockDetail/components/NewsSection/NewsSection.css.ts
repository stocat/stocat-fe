import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  backgroundColor: "#ffffff",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
});

export const helpIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  fontSize: "12px",
  fontWeight: 600,
  color: vars.color.grey[500],
  backgroundColor: vars.color.grey[200],
  borderRadius: "50%",
  cursor: "help",
});

export const moreButton = style({
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[600],
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  ":hover": {
    color: vars.color.grey[800],
  },
});

export const newsList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const newsItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
  padding: "14px 20px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.grey[50],
  },

  ":last-child": {
    borderBottom: "none",
  },
});

export const newsItemHighlighted = style([
  newsItem,
  {
    backgroundColor: vars.color.grey[50],
  },
]);

export const newsTitle = style({
  fontSize: "14px",
  fontWeight: 400,
  color: vars.color.grey[800],
  lineHeight: 1.5,
  flex: 1,
});

export const newsTitleHighlighted = style([
  newsTitle,
  {
    fontWeight: 600,
    color: vars.color.grey[900],
  },
]);

export const newsTimestamp = style({
  fontSize: "12px",
  color: vars.color.grey[500],
  flexShrink: 0,
});

export const placeholder = style({
  height: "120px",
  backgroundColor: vars.color.grey[100],
  margin: "16px 20px",
  borderRadius: "8px",
});
