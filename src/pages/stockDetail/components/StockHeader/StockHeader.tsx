import * as styles from "./StockHeader.css";

interface StockHeaderProps {
  name: string;
  price: number;
  changePercent: number;
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

export default function StockHeader({ name, price, changePercent }: StockHeaderProps) {
  return (
    <header className={styles.container}>
      <h1 className={styles.stockName}>{name}</h1>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{formatPrice(price)}</span>
        <span className={getChangeStyle(changePercent)}>
          {formatChangePercent(changePercent)}
        </span>
      </div>
    </header>
  );
}
