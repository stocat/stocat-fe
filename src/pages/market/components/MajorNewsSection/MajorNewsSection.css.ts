import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/vars.css";

// 섹션 전체 컨테이너
export const container = style({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px 0px",
});


export const sectionTitle = style({
    fontSize: "18px",
    fontWeight: 700,
    color: vars.color.grey[900],
    margin: 0,
});


export const newsCard = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    background: "linear-gradient(163.3deg, #F7FAFF 23.4%, #FFFFFF 55.06%, #C6EDFF 131%)",
    borderRadius: "16px",
    gap: "8px",
});

export const badge = style({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "12px",
    fontWeight: 600,
    marginBottom: "4px",


    background: "linear-gradient(91.05deg, #00BECC 7.02%, #00727A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
});


export const companyName = style({
    fontSize: "16px",
    fontWeight: 700,
    color: vars.color.grey[900],
    margin: 0,
});


export const headline = style({
    fontSize: "14px",
    fontWeight: 500,
    color: vars.color.grey[800],
    margin: 0,
});