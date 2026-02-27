import type { StockDetailData, Tab, Period } from "./StockDetail.types";

export const tabs: Tab[] = [
  { key: "info", label: "정보" },
  { key: "myStock", label: "나의 주식" },
];

export const periods: Period[] = [
  { key: "1D", label: "1일" },
  { key: "1W", label: "1주" },
  { key: "3M", label: "3달" },
  { key: "1Y", label: "1년" },
  { key: "5Y", label: "5년" },
  { key: "ALL", label: "전체" },
];

export const mockStockDetail: StockDetailData = {
  id: "samsung-electronics",
  name: "삼성전자",
  price: 119100,
  changePercent: 1.8,
  categories: [
    { label: "정보기술(IT)", type: "sector" },
    { label: "하드웨어", type: "industry" },
  ],
  priceInfo: {
    dailyLow: 150800,
    dailyHigh: 160000,
    yearlyLow: 50800,
    yearlyHigh: 160000,
    currentPrice: 119100,
    lastUpdated: "20:00 기준",
  },
  industryNews: [
    {
      id: "1",
      title: "(요약) 미국의 반도체 수출 규제 강화로 국내 반도체 업종 전반의 변동성 증가",
      timestamp: "시간",
      isHighlighted: true,
    },
    { id: "2", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "3", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "4", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    {
      id: "5",
      title: "(요약) 미국의 반도체 수출 규제 강화로 국내 반도체 업종 전반의 변동성 증가",
      timestamp: "시간",
      isHighlighted: true,
    },
    { id: "6", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "7", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "8", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
  ],
  companyNews: [
    { id: "c1", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "c2", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
    { id: "c3", title: "(실제 뉴스 헤드라인)", timestamp: "시간" },
  ],
};

export function getStockById(stockId: string): StockDetailData | null {
  if (stockId === "samsung-electronics" || stockId) {
    return { ...mockStockDetail, id: stockId };
  }
  return null;
}
