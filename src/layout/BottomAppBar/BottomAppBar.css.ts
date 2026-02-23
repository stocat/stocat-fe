import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const bottomAppBar = style({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "394px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: vars.color.grey[50],
  borderTop: `1px solid ${vars.color.grey[200]}`,
});

export const navItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  padding: "8px 16px",
  border: "none",
  backgroundColor: "transparent",
  textDecoration: "none",
  cursor: "pointer",
  color: vars.color.grey[600],
  transition: "color 0.2s ease",

  ":hover": {
    color: vars.color.blueGreen.normal,
  },
});

export const navItemActive = style({
  color: vars.color.grey[900],
});

export const navLabel = style({
  fontSize: "11px",
  fontWeight: 500,
});

export const tradeBar = style({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "394px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "0 20px",
  backgroundColor: "#ffffff",
  borderTop: `1px solid ${vars.color.grey[200]}`,
});

export const tradeButton = style({
  flex: 1,
  height: "44px",
  fontSize: "15px",
  fontWeight: 600,
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
});

export const sellButton = style([
  tradeButton,

]);

export const buyButton = style([
  tradeButton,
]);
