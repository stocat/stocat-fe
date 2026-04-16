import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  minHeight: "100dvh",
  backgroundColor: vars.color.role.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 24px calc(40px + env(safe-area-inset-bottom))",
});

export const heading = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  marginBottom: 34,
});

export const subHeading = style({
  ...vars.typography.body1,
  color: vars.color.role.grey,
  textAlign: "center",
});

export const mainHeading = style({
  ...vars.typography.h1,
  color: vars.color.role.text,
  textAlign: "center",
});

export const characterImage = style({
  width: 124,
  height: 124,
  transform: "scaleX(-1)",
  marginBottom: "auto",
});

export const resultCard = style({
  width: "100%",
  backgroundColor: vars.color.role.background,
  borderRadius: 16,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
  marginBottom: 24,
});

export const tag = style({
  ...vars.typography.caption1,
  fontWeight: "510",
  color: vars.color.role.secondary,
  backgroundColor: "rgba(0, 143, 153, 0.05)",
  borderRadius: 40,
  padding: "2px 6px",
});

export const cardMessage = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
  textAlign: "center",
  whiteSpace: "pre-line",
});

export const rateBarWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const rateBar = style({
  width: "100%",
  height: 10,
  backgroundColor: vars.color.role.background2,
  borderRadius: 5,
  position: "relative",
  overflow: "visible",
});

export const rateDot = style({
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: vars.color.role.primary,
});

export const rateLabels = style({
  display: "flex",
  justifyContent: "space-between",
});

export const rateLabel = style({
  ...vars.typography.caption3,
  fontWeight: "500",
  color: vars.color.role.subtext,
});

export const returnButton = style({
  width: "100%",
  height: 56,
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  backgroundColor: vars.color.role.subcolor,
  color: vars.color.role.background,
  ...vars.typography.body1,
});
