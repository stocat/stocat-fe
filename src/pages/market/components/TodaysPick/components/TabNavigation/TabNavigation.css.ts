import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  gap: "4px",
  marginBottom: "16px",
  borderBottom: `1px solid ${vars.color.grey[100]}`,
});

export const tab = style({
  flex: 1,
  padding: "8px 4px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[500],
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  transition: "color 0.2s, border-color 0.2s",
  whiteSpace: "nowrap",

  ":hover": {
    color: vars.color.grey[700],
  },
});

export const tabActive = style([
  tab,
  {
    color: vars.color.grey[900],
    borderBottomColor: vars.color.grey[900],
  },
]);
