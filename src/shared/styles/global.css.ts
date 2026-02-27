import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("button", {
  cursor: "pointer",
  border: "none",
  background: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  color: "inherit",
});
