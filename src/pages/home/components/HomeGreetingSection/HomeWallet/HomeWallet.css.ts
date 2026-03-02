import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  marginTop: 16,
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
});

export const title = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ctaMyWallet = style({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: 6,
});

globalStyle(`${ctaMyWallet} > span`, {
  width: "fit-content",
  fontSize: 12,
  fontWeight: 600,
  color: vars.color.role.subtext,
});

export const ctaMyWalletVector = style({
  paddingBottom: 2.5,
});

export const currentTime = style({
  width: "fit-content",
  ...vars.typography.caption1,
  color: vars.color.role.grey,
});

export const buttonWrapper = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
});

export const button = style({
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 16,
  paddingRight: 16,
  width: 176,
  height: 64,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: vars.color.role.background2,
  borderRadius: 16,
});

export const currency = style({
  ...vars.typography.body5,
  color: vars.color.role.grey,
});

export const balance = style({
  ...vars.typography.body3,
  color: vars.color.role.text,
});
