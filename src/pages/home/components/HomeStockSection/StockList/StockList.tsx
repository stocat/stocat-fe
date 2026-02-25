import * as styles from "./StockList.css";

interface StockListProps {
  filters: readonly string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function StockList({
  filters,
  selectedFilter,
  onFilterChange,
}: StockListProps) {
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
      <div>내 종목 List</div>
    </div>
  );
}
