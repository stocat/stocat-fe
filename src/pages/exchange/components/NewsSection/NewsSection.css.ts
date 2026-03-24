import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "24px 16px",
  backgroundColor: vars.color.role.background,
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const title = style({
  ...vars.typography.body1,
  color: vars.color.role.text,
});

export const newsList = style({
  display: "flex",
  flexDirection: "column",
});

export const newsItem = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "16px 0",
  borderBottom: `1px solid ${vars.color.role.line}`,
  selectors: {
    "&:first-child": {
      paddingTop: 0,
    },
  },
});

export const newsTitle = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const newsMeta = style({
  display: "flex",
  gap: 8,
  ...vars.typography.caption1,
  color: vars.color.role.grey,
});

export const moreLink = style({
  ...vars.typography.label2,
  color: vars.color.role.subtext,
  textAlign: "center",
  paddingTop: 8,
  cursor: "pointer",
  textDecoration: "underline",
});
