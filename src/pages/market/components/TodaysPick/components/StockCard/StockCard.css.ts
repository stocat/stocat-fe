import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 0",
  borderBottom: `1px solid ${vars.color.grey[100]}`,

  ":last-child": {
    borderBottom: "none",
  },
});

export const image = style({
  width: "56px",
  height: "56px",
  borderRadius: "8px",
  backgroundColor: vars.color.grey[200],
  flexShrink: 0,
  objectFit: "cover",
});

export const imagePlaceholder = style([
  image,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    "::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background: `linear-gradient(to bottom right, transparent calc(50% - 1px), ${vars.color.grey[400]} calc(50% - 1px), ${vars.color.grey[400]} calc(50% + 1px), transparent calc(50% + 1px)), linear-gradient(to top right, transparent calc(50% - 1px), ${vars.color.grey[400]} calc(50% - 1px), ${vars.color.grey[400]} calc(50% + 1px), transparent calc(50% + 1px))`,
    },
  },
]);

export const content = style({
  flex: 1,
  minWidth: 0,
});

export const categories = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginBottom: "4px",
});

export const name = style({
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.grey[900],
  marginBottom: "2px",
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const price = style({
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[800],
});

export const changePositive = style({
  fontSize: "13px",
  fontWeight: 500,
  color: "#E54D4D",
});

export const changeNegative = style({
  fontSize: "13px",
  fontWeight: 500,
  color: "#4D7AE5",
});

export const changeNeutral = style({
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[500],
});

export const favoriteButton = style({
  padding: "8px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  flexShrink: 0,
  color: vars.color.grey[300],
  transition: "color 0.2s",

  ":hover": {
    color: "#E54D4D",
  },
});

export const favoriteButtonActive = style([
  favoriteButton,
  {
    color: "#E54D4D",
  },
]);
