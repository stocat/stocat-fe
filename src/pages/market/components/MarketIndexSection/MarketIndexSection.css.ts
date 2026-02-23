import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";


export const container = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
});


export const tab_row = style({
    display: "flex",
    gap: "8px",
});


export const tab_button = style({
    flex: 1,
    padding: "12px 0",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 600,
    backgroundColor: "00555C",
    color: vars.color.grey[900],
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",

    selectors: {
        '&[data-active="true"]': {
            backgroundColor: vars.color.blueGreen.darker,
            color: "#ffffff",
        },
    },
});


export const index_grid = style({
    display: "flex",
    flexDirection: "column",
});


export const index_row = style({
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",
});


export const index_group = style({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flex: 1,
});


export const index_name = style({
    fontSize: "12px",
    color: vars.color.grey[600],
    fontWeight: 400,
});


export const value_row = style({
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    flexWrap: "wrap",
});


export const index_value = style({
    fontSize: "14px",
    fontWeight: 700,
    color: vars.color.grey[900],
});


export const index_change_positive = style({
    fontSize: "12px",
    fontWeight: 600,
    color: "#FF3B30",
});


export const index_change_negative = style({
    fontSize: "12px",
    fontWeight: 600,
    color: "#007AFF",
});


export const v_divider = style({
    width: "1px",
    alignSelf: "stretch",
    backgroundColor: vars.color.grey[200],
    flexShrink: 0,
    margin: "0 12px",
});


export const h_divider = style({
    height: "1px",
    backgroundColor: vars.color.grey[200],
});
