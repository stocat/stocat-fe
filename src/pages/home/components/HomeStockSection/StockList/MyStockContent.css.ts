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
  borderTopColor: "#F6F6F6",
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
  fontSize: 14,
  fontWeight: 700,
  color: vars.color.grey[900],
});

export const averagePrice = style({
  fontSize: 14,
  fontWeight: 500,
  color: vars.color.grey[800],
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
  fontSize: 14,
  fontWeight: 700,
  color: vars.color.grey[900],
});

export const increase = style({
  fontSize: 14,
  fontWeight: 500,
  color: "#FB2C36",
});

export const decrease = style({
  fontSize: 14,
  fontWeight: 500,
  color: "#0088FF",
});
