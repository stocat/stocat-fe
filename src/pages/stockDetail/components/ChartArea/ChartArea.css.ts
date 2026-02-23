import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "200px",
  margin: "0 20px",
  marginBottom: "16px",
  border: `1px solid ${vars.color.grey[200]}`,
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  maxWidth: "calc(100% - 40px)",
});

export const placeholder = style({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "::before": {
    content: '""',
    position: "absolute",
    width: "141.4%",
    height: "1px",
    backgroundColor: vars.color.grey[300],
    transform: "rotate(45deg)",
    transformOrigin: "center",
  },

  "::after": {
    content: '""',
    position: "absolute",
    width: "141.4%",
    height: "1px",
    backgroundColor: vars.color.grey[300],
    transform: "rotate(-45deg)",
    transformOrigin: "center",
  },
});
