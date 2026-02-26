import MyStockContent from "./MyStockContent";
import * as styles from "./StockList.css";

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
      <div>
        <MyStockContent />
      </div>
    </div>
  );
}
