import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const title_container = style({
  display: "flex",          
  justifyContent: "center", 
  alignItems: "center",     
  padding: "7px",
  borderRadius: "2px",
  backgroundColor: vars.color.grey[300],
});

export const title = style({
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.grey[900],
  margin: 0,
});

export const content_container = style({
  position: "relative",
  display: "flex",          
  height: "120px",     
  padding: "15px",
  borderRadius: "10px",
  backgroundColor: vars.color.grey[300],
});

export const content = style({
  fontSize: "10px",
  fontWeight: 400,
  color: vars.color.grey[900],
  margin: 0,
});

export const more_button = style({
  position: "absolute",
  bottom: "10px",  
  right: "15px",   
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
  color: vars.color.grey[900],
});