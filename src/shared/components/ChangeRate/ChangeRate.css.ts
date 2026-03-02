import { styleVariants } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const directionStyle = styleVariants({
  positive: { color: vars.color.accent.red },
  negative: { color: vars.color.accent.blue },
  neutral: { color: vars.color.role.subtext },
});

export const typographyStyle = styleVariants({
  body2: { ...vars.typography.body2 },
  body3: { ...vars.typography.body3 },
  body4: { ...vars.typography.body4 },
});
