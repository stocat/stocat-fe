import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  paddingLeft: 12,
  paddingRight: 12,

  width: 358,
  height: 86,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  borderTopWidth: 1,
  borderTopStyle: "solid",
  borderTopColor: vars.color.role.background2,
});

export const corpInfoWrapper = style({
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  gap: 16,
});

export const corpInfoLogo = style({
  width: 46,
  height: 46,
  borderRadius: 1000,
  backgroundColor: "#FEF2F2",
});

export const corpInfoTitleWrapper = style({
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 4,
});

export const corpInfoTitle = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
});

export const averagePrice = style({
  ...vars.typography.body4,
  color: vars.color.role.subtext,
});

export const priceWrapper = style({
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: 4,
});

export const currentPrice = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
});

export const increase = style({
  ...vars.typography.body4,
  color: "#FF383C",
});

export const decrease = style({
  ...vars.typography.body4,
  color: "#2E7BF6",
});
