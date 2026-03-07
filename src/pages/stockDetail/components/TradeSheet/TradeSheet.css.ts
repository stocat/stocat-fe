import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

const slideUp = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const RED = "#E54D4D";

export const overlay = style({
  position: "absolute",
  top: "70px",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "white",
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

// ── Stock mini-header ──────────────────────────────────────────────────────

export const stockHeader = style({
  padding: "16px 20px 12px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const tagRow = style({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "4px",
});

export const tag = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "3px 10px",
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.blueGreen.normal,
  backgroundColor: vars.color.blueGreen.light,
  borderRadius: "20px",
});

export const stockName = style({
  fontSize: "24px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: 0,
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const priceGroup = style({
  display: "flex",
  alignItems: "baseline",
  gap: "8px",
});

export const price = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
});

export const changePositive = style({
  fontSize: "16px",
  fontWeight: 600,
  color: RED,
});

export const changeNegative = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#4D7AE5",
});

// ── Info rows ──────────────────────────────────────────────────────────────

export const infoSection = style({
  padding: "8px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const infoRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const infoLabel = style({
  fontSize: "15px",
  color: vars.color.grey[600],
});

export const infoValue = style({
  fontSize: "15px",
  fontWeight: 600,
  color: vars.color.grey[900],
  display: "flex",
  gap: "6px",
  alignItems: "center",
});

export const infoUnit = style({
  fontSize: "13px",
  fontWeight: 400,
  color: vars.color.grey[500],
});

// ── Question box ───────────────────────────────────────────────────────────

export const questionBox = style({
  margin: "12px 20px 0",
  padding: "16px 20px",
  backgroundColor: vars.color.grey[100],
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const questionText = style({
  fontSize: "16px",
  color: vars.color.grey[700],
});

export const quantity = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
});

export const quantityError = style({
  fontSize: "20px",
  fontWeight: 700,
  color: RED,
});

export const errorMessage = style({
  margin: "8px 20px 0",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: 500,
  color: RED,
});

// ── Keypad ─────────────────────────────────────────────────────────────────

export const keypad = style({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  padding: "8px 20px",
  alignContent: "center",
});

export const key = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "64px",
  fontSize: "28px",
  fontWeight: 500,
  color: vars.color.grey[900],
  background: "none",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",

  ":active": {
    backgroundColor: vars.color.grey[100],
  },
});

export const keyEmpty = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "64px",
  background: "none",
  border: "none",
  cursor: "default",
});

// ── Action button ──────────────────────────────────────────────────────────

export const actionArea = style({
  padding: "12px 20px 24px",
});

export const actionButton = style({
  width: "100%",
  height: "56px",
  borderRadius: "14px",
  border: "none",
  backgroundColor: RED,
  color: "white",
  fontSize: "17px",
  fontWeight: 700,
  cursor: "pointer",
});

export const actionButtonDisabled = style({
  width: "100%",
  height: "56px",
  borderRadius: "14px",
  border: "none",
  backgroundColor: vars.color.grey[200],
  color: vars.color.grey[500],
  fontSize: "17px",
  fontWeight: 700,
  cursor: "not-allowed",
});

// ── Confirmation modal ─────────────────────────────────────────────────────

export const confirmOverlay = style({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  animation: `${fadeIn} 0.2s ease`,
});

export const confirmSheet = style({
  backgroundColor: "white",
  borderRadius: "20px 20px 0 0",
  padding: "28px 20px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  animation: `${slideUp} 0.35s cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const confirmTitle = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.grey[900],
  margin: "0 0 4px",
});

export const confirmRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const confirmLabel = style({
  fontSize: "15px",
  color: vars.color.grey[600],
});

export const confirmValue = style({
  fontSize: "15px",
  fontWeight: 600,
  color: vars.color.grey[900],
});

export const confirmButtons = style({
  display: "flex",
  gap: "10px",
  marginTop: "8px",
});

export const cancelButton = style({
  flex: 1,
  height: "52px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: vars.color.grey[100],
  color: vars.color.grey[600],
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
});

export const confirmButton = style({
  flex: 1,
  height: "52px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: RED,
  color: "white",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
});
