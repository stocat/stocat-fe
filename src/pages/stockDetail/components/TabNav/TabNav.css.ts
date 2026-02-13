import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  borderBottom: `1px solid ${vars.color.grey[200]}`,
  padding: "0 20px",
});

export const tab = style({
  padding: "12px 16px",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.grey[500],
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    color: vars.color.grey[700],
  },
});

export const tabActive = style([
  tab,
  {
    color: vars.color.grey[900],
    borderBottomColor: vars.color.grey[900],
    fontWeight: 600,
  },
]);
