import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  padding: "16px 20px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
});

export const timestamp = style({
  fontSize: "12px",
  color: vars.color.grey[500],
});

export const priceRow = style({
  marginBottom: "12px",
});

export const rangeBar = style({
  position: "relative",
  height: "4px",
  backgroundColor: vars.color.grey[200],
  borderRadius: "2px",
  marginBottom: "8px",
});

export const rangeIndicator = style({
  position: "absolute",
  width: "12px",
  height: "12px",
  backgroundColor: vars.color.grey[700],
  borderRadius: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

export const rangeLabels = style({
  display: "flex",
  justifyContent: "space-between",
});

export const rangeLabel = style({
  fontSize: "12px",
  color: vars.color.grey[600],
});

export const rangeValue = style({
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.grey[800],
});
