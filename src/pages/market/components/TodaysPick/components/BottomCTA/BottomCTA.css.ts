import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 16px",
  marginTop: "16px",
  backgroundColor: vars.color.grey[100],
  borderRadius: "8px",
  fontSize: "13px",
  color: vars.color.grey[700],
  cursor: "pointer",
  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: vars.color.grey[200],
  },
});

export const highlight = style({
  fontWeight: 600,
  color: vars.color.grey[900],
  marginLeft: "8px",
});
