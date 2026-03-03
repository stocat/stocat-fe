import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  backgroundColor: "#ffffff",
  padding: "20px",
  paddingBottom: "80px",
});

export const header = style({
  marginBottom: "16px",
});

export const title = style({
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
});

export const postList = style({
  listStyle: "none",
  margin: 0,
  padding: "0 0 4px 0",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxHeight: "200px",
  overflowY: "auto",
  marginBottom: "20px",
});

export const postItem = style({
  display: "flex",
  gap: "14px",
  padding: "16px",
  backgroundColor: vars.color.grey[50],
  borderRadius: "12px",
  flexShrink: 0,
});

export const avatar = style({
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundColor: vars.color.grey[200],
  flexShrink: 0,
  overflow: "hidden",
});

export const postContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  flex: 1,
});

export const nickname = style({
  fontSize: "13px",
  fontWeight: 600,
  color: vars.color.grey[700],
});

export const postText = style({
  fontSize: "14px",
  fontWeight: 400,
  color: vars.color.grey[800],
  margin: 0,
  lineHeight: 1.5,
});

export const moreButton = style({
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
