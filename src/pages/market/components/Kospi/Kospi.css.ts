import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";


export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "16px",
});


export const tab_row = style({
  display: "flex",
  gap: "8px",
  marginBottom: "20px",
});


export const tab_button = style({
  padding: "8px 24px",
  borderRadius: "8px",
  fontSize: "12px",
  fontWeight: 600,
  backgroundColor: vars.color.grey[100], 
  color: vars.color.grey[600],
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s",

  selectors: {
    
    '&[data-active="true"]': {
      backgroundColor: vars.color.grey[300],
      color: vars.color.grey[900],
    }
  }
});


export const index_container = style({
  display: "flex",
  alignItems: "center", 
});


export const index_group = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1, 
});


export const index_name = style({
  fontSize: "12px",
  color: vars.color.grey[500],
  fontWeight: 500,
});


export const value_row = style({
  display: "flex",
  alignItems: "baseline", 
  gap: "6px",
});


export const index_value = style({
  fontSize: "12px",
  fontWeight: 700,
  color: vars.color.grey[900],
});


export const index_change = style({
  fontSize: "12px",
  fontWeight: 600,
  color: "#FF3B30", 
});


export const divider = style({
  width: "1px",
  height: "30px", 
  backgroundColor: vars.color.grey[300],
  margin: "0 20px", 
});