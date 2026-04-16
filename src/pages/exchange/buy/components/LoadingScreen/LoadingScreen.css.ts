import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

const float = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-12px)" },
  "100%": { transform: "translateY(0)" },
});

export const container = style({
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
  background: "linear-gradient(to bottom left, #F7FAFF 0%, #FFFFFF 15%, #C6EDFF 100%)",
});

export const heading = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
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

export const character = style({
  width: 124,
  height: 124,
  animation: `${float} 2s ease-in-out infinite`,
});
