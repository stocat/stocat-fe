import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "0 20px 16px",
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.grey[700],
  backgroundColor: vars.color.grey[100],
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.grey[200],
  },
});
