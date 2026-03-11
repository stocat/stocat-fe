import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/stock/${stock.id}`, { state: { stock } });
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavoriteToggle?.(stock.id);
  };

  const primaryCategory = stock.categories[0];

  return (
    <article
      className={styles.container}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      {stock.imageUrl ? (
        <img src={stock.imageUrl} alt={stock.name} className={styles.image} />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.imagePlaceholderText}>{stock.name[0]}</span>
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{stock.name}</span>
          {primaryCategory && <CategoryTag category={primaryCategory} />}
        </div>
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
          stock.isFavorite ? styles.favoriteButtonActive : styles.favoriteButton
        }
        onClick={handleFavoriteClick}
        aria-label={stock.isFavorite ? "관심 종목 해제" : "관심 종목 추가"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={stock.isFavorite ? "currentColor" : "none"}
        >
          <path
            d="M13.8921 3.07327C13.5516 2.7326 13.1473 2.46237 12.7023 2.27799C12.2574 2.09362 11.7804 1.99872 11.2988 1.99872C10.8171 1.99872 10.3402 2.09362 9.89521 2.27799C9.45023 2.46237 9.04595 2.7326 8.70544 3.07327L7.99878 3.77994L7.29211 3.07327C6.60432 2.38547 5.67147 1.99907 4.69878 1.99907C3.72609 1.99907 2.79324 2.38547 2.10544 3.07327C1.41765 3.76106 1.03125 4.69391 1.03125 5.6666C1.03125 6.63929 1.41765 7.57214 2.10544 8.25993L2.81211 8.9666L7.99878 14.1533L13.1854 8.9666L13.8921 8.25993C14.2328 7.91943 14.503 7.51514 14.6874 7.07017C14.8718 6.6252 14.9667 6.14826 14.9667 5.6666C14.9667 5.18494 14.8718 4.708 14.6874 4.26303C14.503 3.81806 14.2328 3.41377 13.8921 3.07327Z"
            stroke="#FF383C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </article>
  );
}
