import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

const base = style({
  flexShrink: 0,
  borderRadius: 16,
  overflow: "hidden",
  backgroundColor: vars.color.role.background2,
});

export const layout = styleVariants({
  horizontal: [
    base,
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      width: 260,
    },
  ],
  vertical: [
    base,
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      padding: 16,
      width: 160,
      height: 160,
    },
  ],
});

export const logo = style({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: vars.color.role.line,
  flexShrink: 0,
  objectFit: "cover",
});

export const info = styleVariants({
  horizontal: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0,
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
});

const nameRowBase = style({
  display: "flex",
  alignItems: "center",
});

export const nameRow = styleVariants({
  horizontal: [nameRowBase, { flexDirection: "row", gap: 6 }],
  vertical: [nameRowBase, { flexDirection: "column", gap: 4 }],
});

export const name = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const badge = style({
  minWidth: 32,
  height: 22,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px 8px 2px",
  borderRadius: 40,
  fontSize: 12,
  fontWeight: 500,
  // lineHeight: 1.5,
  whiteSpace: "nowrap",
  backgroundColor: vars.color.role.background2,
  color: vars.color.role.secondary,
});

export const priceRow = style({
  marginTop: 2,
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const changeRate = style({
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1.5,
});

export const price = style({
  fontSize: 12,
  fontWeight: 700,
  color: vars.color.role.subtext,
  lineHeight: 1.5,
});
