import { useMemo } from "react";
import MyStockContent from "./MyStockContent";
import * as styles from "./StockList.css";
import { MOCK_STOCKS } from "../HomeStockSection.mock";

type Currency = "dollar" | "won";

interface StockListProps<T extends string> {
  filters: readonly T[];
  selectedFilter: T;
  onFilterChange: (filter: T) => void;
  currency: Currency;
}

export default function StockList<T extends string>({
  filters,
  selectedFilter,
  onFilterChange,
  currency,
}: StockListProps<T>) {
  const displayStocks = useMemo(() => {
    const sorted = [...MOCK_STOCKS];
    switch (selectedFilter) {
      case "현재가":
        return sorted.sort((a, b) => b.currentPriceRaw - a.currentPriceRaw);
      case "평가금액":
        return sorted.sort((a, b) => b.evaluationRaw - a.evaluationRaw);
      default:
        return sorted;
    }
  }, [selectedFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.badgeList}>
        {filters.map((filter) => (
          <button
            key={filter}
            aria-selected={filter === selectedFilter}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.contentList}>
        {displayStocks.map((stock) => (
          <MyStockContent key={stock.id} {...stock} currency={currency} />
        ))}
      </div>
    </div>
  );
}
