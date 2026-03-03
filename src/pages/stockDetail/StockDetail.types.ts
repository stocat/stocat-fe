export interface StockDetailData {
  id: string;
  name: string;
  industry: string;
  price: number;
  changePercent: number;
  imageUrl?: string;
  categories: CategoryTag[];
  priceInfo: PriceInfo;
  industryNews: NewsItem[];
  companyNews: NewsItem[];
  influenceReasons: InfluenceReason[];
}

export interface CategoryTag {
  label: string;
  type: "sector" | "industry";
}

export interface PriceInfo {
  dailyLow: number;
  dailyHigh: number;
  yearlyLow: number;
  yearlyHigh: number;
  currentPrice: number;
  lastUpdated: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  timestamp: string;
  isHighlighted?: boolean;
}

export interface InfluenceReason {
  id: string;
  text: string;
}

export type TabType = "info" | "myStock";

export interface Tab {
  key: TabType;
  label: string;
}

export type PeriodType = "1D" | "1W" | "3M" | "1Y" | "5Y" | "ALL";

export interface Period {
  key: PeriodType;
  label: string;
}
