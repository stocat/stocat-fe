import { useState, useEffect } from "react";
import type { TabType, IndexData } from "./MarketIndexSection.types";
import { TABS, MOCK_INDEX_DATA } from "./MarketIndexSection.mock";

export function useMarketIndex() {
  const [activeTab, setActiveTab] = useState<TabType>("한국");
  const [indices, setIndices] = useState<IndexData[]>(MOCK_INDEX_DATA["한국"]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // api 호출시 주석 제거
    // const data = await fetchMarketIndices(activeTab);
    setIndices(MOCK_INDEX_DATA[activeTab]);
    setIsLoading(false);
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return {
    tabs: TABS,
    activeTab,
    indices,
    isLoading,
    error,
    onTabChange: handleTabChange,
  };
}
