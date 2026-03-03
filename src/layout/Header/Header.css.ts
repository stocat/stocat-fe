import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const header = style({
  height: "70px",
  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `3px solid ${vars.color.grey[100]}`,
  backgroundColor: "white",
});

export const leftGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const logo = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
});

export const indexInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const indexName = style({
  color: vars.color.grey[900],
  fontWeight: 400,
  fontSize: "14px",
});

export const indexValue = style({
  fontWeight: 400,
  fontSize: "14px",
});

export const indexChange = style({
  fontWeight: 400,
  fontSize: "12px",
});

export const iconGroup = style({
  display: "flex",
  alignItems: "center",
  gap: 0,
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

export const stockDetailHeader = style({
  height: "70px",
  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `3px solid ${vars.color.grey[100]}`,
  backgroundColor: "white",
});

export const stockDetailIconGroup = style({
  display: "flex",
  alignItems: "center",
  gap: 0,
});
