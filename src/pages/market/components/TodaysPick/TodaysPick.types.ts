export interface Category {
  label: string;
  type: "sector" | "industry";
}

export interface Stock {
  id: string;
  imageUrl: string;
  categories: Category[];
  name: string;
  price: number;
  changePercent: number;
  isFavorite: boolean;
}

export type TabType =
  | "popularity"
  | "tradingValue"
  | "tradingVolume"
  | "rising"
  | "falling";

export interface Tab {
  key: TabType;
  label: string;
}
