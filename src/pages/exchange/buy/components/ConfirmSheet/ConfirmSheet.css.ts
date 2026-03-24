import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(26, 26, 26, 0.6)",
  zIndex: 200,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

export const sheet = style({
  width: "100%",
  maxWidth: "394px",
  backgroundColor: vars.color.role.background,
  borderRadius: "16px 16px 0 0",
  padding: "32px 24px calc(24px + env(safe-area-inset-bottom))",
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const title = style({
  ...vars.typography.subtitle1,
  color: vars.color.role.text,
});

export const infoList = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const infoRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const infoLabel = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const infoValue = style({
  ...vars.typography.body3,
  color: vars.color.role.subtext,
});

export const walletValues = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 2,
});

export const buttonRow = style({
  display: "flex",
  gap: 8,
});

export const buttonBase = style({
  flex: 1,
  height: 53,
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  ...vars.typography.body3,
});

export const backButton = style([
  buttonBase,
  {
    backgroundColor: vars.color.role.line,
    color: vars.color.role.subtext,
  },
]);

export const confirmButton = style([
  buttonBase,
  {
    backgroundColor: vars.color.role.subcolor,
    color: vars.color.role.background,
  },
]);
