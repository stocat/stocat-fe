import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  backgroundColor: "#ffffff",
  padding: "20px",
});

export const title = style({
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: "0 0 16px 0",
});

export const reasonList = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  marginBottom: "24px",
});

export const reasonCard = style({
  minHeight: "180px",
  padding: "16px",
  backgroundColor: vars.color.grey[50],
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
});

export const reasonText = style({
  fontSize: "12px",
  fontWeight: 400,
  color: vars.color.grey[900],
  lineHeight: 1.6,
});

export const unknownButton = style({
  display: "block",
  width: "100%",
  padding: "8px",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.grey[700],
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
});
