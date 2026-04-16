import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  marginTop: "auto",
  backgroundColor: vars.color.role.background,
  padding: "16px 16px calc(16px + env(safe-area-inset-bottom))",
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 4,
});

export const key = style({
  height: 52,
  borderRadius: 8,
  backgroundColor: vars.color.role.background,
  border: "none",
  cursor: "pointer",
  fontSize: "28px",
  fontWeight: "500",
  lineHeight: "150%",
  color: vars.color.role.text,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
});

export const emptyCell = style({
  height: 52,
});

export const backspaceIcon = style({
  width: 28,
  height: 28,
  objectFit: "contain",
});

export const buyButton = style({
  width: "100%",
  height: 56,
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  ...vars.typography.body1,
});

export const buyButtonVariants = styleVariants({
  enabled: [
    buyButton,
    {
      backgroundColor: vars.color.role.subcolor,
      color: vars.color.role.background,
    },
  ],
  disabled: [
    buyButton,
    {
      backgroundColor: vars.color.role.line,
      color: vars.color.role.grey,
      cursor: "not-allowed",
    },
  ],
});
