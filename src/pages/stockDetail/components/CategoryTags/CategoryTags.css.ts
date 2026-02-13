import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 20px",
  flexWrap: "wrap",
});

export const tag = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "6px 12px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[700],
  backgroundColor: vars.color.grey[100],
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.grey[200],
  },
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
