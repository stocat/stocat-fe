import type { TabType, IndexData } from "./MarketIndexSection.types";

export const TABS: TabType[] = ["한국", "미국", "CRYPTO"];

export const MOCK_INDEX_DATA: Record<TabType, IndexData[]> = {
  한국: [
    { name: "코스피", value: "4,220.56", change: "+2.2%" },
    { name: "코스닥", value: "1,121.87", change: "+0.6%" },
    { name: "나스닥", value: "23,066.46", change: "-0.1%" },
    { name: "다우존스", value: "5,220.56", change: "+0.2%" },
    { name: "S&P 500", value: "6,881.31", change: "+0.5%" },
    { name: "환율", value: "1,452.38", change: "+0.6%" },
  ],
  미국: [
    { name: "나스닥", value: "23,066.46", change: "-0.1%" },
    { name: "다우존스", value: "5,220.56", change: "+0.2%" },
    { name: "S&P 500", value: "6,881.31", change: "+0.5%" },
    { name: "러셀2000", value: "2,285.12", change: "+0.3%" },
    { name: "VIX", value: "14.82", change: "-1.2%" },
    { name: "환율", value: "1,452.38", change: "+0.6%" },
  ],
  CRYPTO: [
    { name: "BTC", value: "97,450.00", change: "+1.5%" },
    { name: "ETH", value: "3,220.00", change: "+2.1%" },
    { name: "XRP", value: "0.58", change: "-0.8%" },
    { name: "SOL", value: "185.30", change: "+3.2%" },
    { name: "BNB", value: "412.70", change: "+0.9%" },
    { name: "DOGE", value: "0.142", change: "-1.4%" },
  ],
};
