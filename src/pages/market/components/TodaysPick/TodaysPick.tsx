import { useState } from "react";
import { TabNavigation, StockCard} from "./components";
import { TABS, MOCK_STOCKS } from "./TodaysPick.mock";
import type { TabType, Stock } from "./TodaysPick.types";
import * as styles from "./TodaysPick.css";

export default function TodaysPick() {
  const [activeTab, setActiveTab] = useState<TabType>("popularity");
  const [stocks, setStocks] = useState<Stock[]>(MOCK_STOCKS);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleFavoriteToggle = (stockId: string) => {
    setStocks((prev) =>
      prev.map((stock) =>
        stock.id === stockId
          ? { ...stock, isFavorite: !stock.isFavorite }
          : stock
      )
    );
  };


  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오늘의 픽</h2>
      <TabNavigation
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className={styles.stockList}>
        {stocks.map((stock) => (
          <StockCard
            key={stock.id}
            stock={stock}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </section>
  );
}
