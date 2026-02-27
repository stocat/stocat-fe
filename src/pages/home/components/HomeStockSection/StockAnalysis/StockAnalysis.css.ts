import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 24,
  paddingRight: 24,

  display: "flex",
  gap: 20,
  backgroundColor: "#fffff",
  borderRadius: 16,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.08)",
});

export const character = style({
  flexShrink: 0,
});

export const analysisWrapper = style({
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 6,
});

export const titleWrapper = style({
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const title = style({
  fontSize: 12,
  fontWeight: 500,
  color: vars.color.blue.normal,
});

export const sparkleIcon = style({ flexShrink: 0 });

export const analysisContent = style({
  fontSize: 12,
  fontWeight: 700,
  color: vars.color.blue.darkActive,
  whiteSpace: "pre-line",
});
