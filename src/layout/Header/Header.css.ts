import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const header = style({
  height: "80px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${vars.color.grey[200]}`,
  backgroundColor: `${vars.color.grey[200]}`,
});

export const iconGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const iconButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "8px",
  color: vars.color.grey[900],
});

export const logo = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.blueGreen.normal,
  margin: 0,
});
