import { useState } from "react";
import type { CategoryTag } from "../../StockDetail.types";
import * as styles from "./StockHeader.css";

interface StockHeaderProps {
  categories: CategoryTag[];
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export default function StockHeader({
  categories,
  name,
  value,
  change,
  isPositive,
}: StockHeaderProps) {
  const [showWon, setShowWon] = useState(true);

  return (
    <header className={styles.container}>
      <div className={styles.tagRow}>
        {categories.map((cat, i) => (
          <span key={i} className={styles.tag}>
            {cat.label}
          </span>
        ))}
      </div>
      <h1 className={styles.stockName}>{name}</h1>
      <div className={styles.priceRow}>
        <div className={styles.priceGroup}>
          <span className={styles.price}>{value}</span>
          <span
            className={
              isPositive ? styles.changePositive : styles.changeNegative
            }
          >
            {change}
          </span>
        </div>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowWon((prev) => !prev)}
          aria-label="원화/달러 토글"
        >
          {showWon ? "W" : "$"}
        </button>
      </div>
    </header>
  );
}
