import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  backgroundColor: "#ffffff",
});

export const sectionTitle = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
  padding: "20px 20px 12px 20px",
});

export const tabRow = style({
  display: "flex",
  gap: "8px",
  padding: "0 20px 12px 20px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,
});

export const tab = style({
  padding: "6px 14px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[500],
  backgroundColor: "transparent",
  border: `1px solid ${vars.color.grey[200]}`,
  borderRadius: "20px",
  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.color.grey[200],
  },
});

export const tabActive = style([
  tab,
  {
    color: vars.color.grey[900],
    backgroundColor: vars.color.grey[200],
  },
]);

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

export const moreButton = style({
  display: "block",
  width: "calc(100% - 40px)",
  margin: "16px 20px",
  padding: "12px",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.grey[700],
  backgroundColor: "transparent",
  border: `1px solid ${vars.color.grey[300]}`,
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center",

  ":hover": {
    backgroundColor: vars.color.grey[50],
  },
});
