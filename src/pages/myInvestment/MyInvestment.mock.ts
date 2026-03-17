export type Market = "전체" | "한국" | "미국" | "CRYPTO";

export const MARKET_FILTERS: readonly Market[] = ["전체", "한국", "미국", "CRYPTO"];

export const MOCK_MY_BALANCE = {
  won: {
    total: "49,350원",
    variationAmount: 1800,
    variationRate: 3.7,
    principal: "283,000원",
    totalProfit: "-12,000원",
    totalProfitRate: -0.6,
  },
  dollar: {
    total: "$ 34.12",
    variationAmount: 1.25,
    variationRate: 3.7,
    principal: "$195.86",
    totalProfit: "-$8.30",
    totalProfitRate: -0.6,
  },
};

export const MOCK_MY_STOCKS = [
  {
    id: "하나투어",
    name: "하나투어",
    market: "한국" as Market,
    averagePrice: "1주 47,550원",
    averagePriceDollar: "1주 $32.91",
    currentPrice: "49,350원",
    currentPriceDollar: "$34.15",
    currentPriceRaw: 49350,
    evaluationRaw: 49350,
    changeRate: 5.0,
  },
  {
    id: "쿠팡",
    name: "쿠팡",
    market: "미국" as Market,
    averagePrice: "1주 28,198원",
    averagePriceDollar: "1주 $19.51",
    currentPrice: "28,198원",
    currentPriceDollar: "$19.51",
    currentPriceRaw: 28198,
    evaluationRaw: 28198,
    changeRate: 8.2,
  },
  {
    id: "테슬라",
    name: "테슬라",
    market: "미국" as Market,
    averagePrice: "1주 588,481원",
    averagePriceDollar: "1주 $407.32",
    currentPrice: "588,481원",
    currentPriceDollar: "$407.32",
    currentPriceRaw: 588481,
    evaluationRaw: 588481,
    changeRate: -0.8,
  },
];

export const MOCK_PORTFOLIO_ITEMS = [
  { id: "하나투어", name: "하나투어", amount: "47,550원", percent: 50, color: "#008F99" },
  { id: "쿠팡", name: "쿠팡", amount: "47,550원", percent: 30, color: "#00555C" },
  { id: "테슬라", name: "테슬라", amount: "47,550원", percent: 20, color: "#F6F6F6" },
];
