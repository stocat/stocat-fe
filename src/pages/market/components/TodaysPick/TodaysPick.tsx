import { TabNavigation, StockCard } from "./components";
import { useTodaysPick } from "./useTodaysPick";
import * as styles from "./TodaysPick.css";

export default function TodaysPick() {
  const { tabs, activeTab, stocks, onTabChange, onFavoriteToggle } = useTodaysPick();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오늘의 픽</h2>
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
      <div className={styles.stockList}>
        {stocks.map((stock) => (
          <StockCard key={stock.id} stock={stock} onFavoriteToggle={onFavoriteToggle} />
        ))}
      </div>
    </section>
  );
}
