import { useState, useEffect } from "react";
import type { Stock, TabType } from "./TodaysPick.types";
import { TABS, MOCK_STOCKS_BY_TAB } from "./TodaysPick.mock";

export function useTodaysPick() {
  const [activeTab, setActiveTab] = useState<TabType>("popularity");
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // api 호출시 주석 제거
    // const data = await fetchStocksByCategory(activeTab);
    setStocks(MOCK_STOCKS_BY_TAB[activeTab]);
    setIsLoading(false);
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleFavoriteToggle = (stockId: string) => {
    setStocks((prev) =>
      prev.map((stock) =>
        stock.id === stockId ? { ...stock, isFavorite: !stock.isFavorite } : stock
      )
    );
  };

  return {
    tabs: TABS,
    activeTab,
    stocks,
    isLoading,
    error,
    onTabChange: handleTabChange,
    onFavoriteToggle: handleFavoriteToggle,
  };
}
