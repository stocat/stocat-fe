import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 20px",
});

export const periodList = style({
  display: "flex",
  gap: "8px",
});

export const periodButton = style({
  padding: "6px 6px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[600],
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.grey[100],
  },
});

export const periodButtonActive = style([
  periodButton,
  {
    color: vars.color.grey[900],
    fontWeight: 600,
  },
]);

export const detailButton = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: 700,
  color: vars.color.grey[800],

  border: `1px solid ${vars.color.grey[200]}`,
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.grey[100],
  },
});
