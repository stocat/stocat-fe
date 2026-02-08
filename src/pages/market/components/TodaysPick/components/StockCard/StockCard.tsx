import type { Stock } from "../../TodaysPick.types";
import CategoryTag from "../CategoryTag";
import * as styles from "./StockCard.css";

interface StockCardProps {
  stock: Stock;
  onFavoriteToggle?: (stockId: string) => void;
}

function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}

function formatChangePercent(percent: number): string {
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent.toFixed(1)}%`;
}

function getChangeStyle(percent: number): string {
  if (percent > 0) return styles.changePositive;
  if (percent < 0) return styles.changeNegative;
  return styles.changeNeutral;
}

export default function StockCard({ stock, onFavoriteToggle }: StockCardProps) {
  const handleFavoriteClick = () => {
    onFavoriteToggle?.(stock.id);
  };

  return (
    <article className={styles.container}>
      {stock.imageUrl ? (
        <img
          src={stock.imageUrl}
          alt={stock.name}
          className={styles.image}
        />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}

      <div className={styles.content}>
        <div className={styles.categories}>
          {stock.categories.map((category, index) => (
            <CategoryTag key={index} category={category} />
          ))}
        </div>
        <p className={styles.name}>{stock.name}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(stock.price)}</span>
          <span className={getChangeStyle(stock.changePercent)}>
            {formatChangePercent(stock.changePercent)}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={
          stock.isFavorite
            ? styles.favoriteButtonActive
            : styles.favoriteButton
        }
        onClick={handleFavoriteClick}
        aria-label={stock.isFavorite ? "관심 종목 해제" : "관심 종목 추가"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={stock.isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </article>
  );
}
