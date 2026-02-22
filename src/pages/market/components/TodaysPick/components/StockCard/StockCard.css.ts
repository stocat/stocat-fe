import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 10px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,

  ":last-child": {
    borderBottom: "none",
  },
});

export const image = style({
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  backgroundColor: vars.color.grey[200],
  flexShrink: 0,
  objectFit: "cover",
});

export const imagePlaceholder = style([
  image,
  {
    backgroundColor: "#1A2B4A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const imagePlaceholderText = style({
  fontSize: "13px",
  fontWeight: 700,
  color: "#ffffff",
  userSelect: "none",
  letterSpacing: "-0.5px",
});

export const content = style({
  flex: 1,
  minWidth: 0,
});

export const nameRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "4px",
});

export const name = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.grey[900],
  flexShrink: 0,
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const price = style({
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.grey[800],
});

export const changePositive = style({
  fontSize: "14px",
  fontWeight: 600,
  color: "#E54D4D",
});

export const changeNegative = style({
  fontSize: "14px",
  fontWeight: 600,
  color: "#4D7AE5",
});

export const changeNeutral = style({
  fontSize: "14px",
  fontWeight: 600,
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
