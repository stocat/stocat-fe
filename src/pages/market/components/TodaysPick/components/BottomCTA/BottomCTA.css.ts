import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 16px",
  marginTop: "16px",
  borderRadius: "8px",
  fontSize: "10px",
  fontWeight: 600,
  color: vars.color.grey[900],
  cursor: "pointer",
  transition: "background-color 0.2s",
  border: `1px solid ${vars.color.grey[300]}`,

  ":hover": {
    backgroundColor: vars.color.grey[200],
  },
});

export const highlight = style({
  fontWeight: 600,
  color: vars.color.grey[900],
  marginLeft: "10px",
});
