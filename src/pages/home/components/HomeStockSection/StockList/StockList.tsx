import MyStockContent from "./MyStockContent";
import * as styles from "./StockList.css";

const MOCK_STOCKS = [
  {
    name: "하나투어",
    averagePrice: "1주 47,550원",
    currentPrice: "49,350원",
    changeRate: 5.0,
  },
  {
    name: "쿠팡",
    averagePrice: "1주 28,198원",
    currentPrice: "28,198원",
    changeRate: 8.2,
  },
  {
    name: "테슬라",
    averagePrice: "1주 588,4810원",
    currentPrice: "588,481원",
    changeRate: -0.8,
  },
  {
    name: "하나투어",
    averagePrice: "1주 47,550원",
    currentPrice: "49,350원",
    changeRate: 5.0,
  },
  {
    name: "쿠팡",
    averagePrice: "1주 28,198원",
    currentPrice: "28,198원",
    changeRate: 8.2,
  },
  {
    name: "테슬라",
    averagePrice: "1주 588,4810원",
    currentPrice: "588,481원",
    changeRate: -0.8,
  },
];

interface StockListProps<T extends string> {
  filters: readonly T[];
  selectedFilter: T;
  onFilterChange: (filter: T) => void;
}

export default function StockList<T extends string>({
  filters,
  selectedFilter,
  onFilterChange,
}: StockListProps<T>) {
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
        {MOCK_STOCKS.map((stock) => (
          <MyStockContent key={stock.name} {...stock} />
        ))}
      </div>
    </div>
  );
}
