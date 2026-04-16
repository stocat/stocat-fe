import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "394px",
  backgroundColor: vars.color.role.background,
  padding: "16px",
  paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
  display: "flex",
  gap: 8,
  borderTop: `1px solid ${vars.color.role.line}`,
  zIndex: 100,
});

export const button = style({
  flex: 1,
  height: 53,
  borderRadius: 8,
  ...vars.typography.body3,
  cursor: "pointer",
  border: "none",
});

export const secondaryButton = style([
  button,
  {
    backgroundColor: vars.color.role.line,
    color: vars.color.role.grey,
  },
]);

export const primaryButton = style([
  button,
  {
    backgroundColor: vars.color.accent.red,
    color: vars.color.role.background,
  },
]);
