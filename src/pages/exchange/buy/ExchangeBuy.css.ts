import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  height: "calc(100dvh - 70px)",
  backgroundColor: vars.color.role.background,
  position: "relative",
});
