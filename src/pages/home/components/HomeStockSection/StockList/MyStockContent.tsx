import * as styles from "./MyStockContent.css";

interface MyStockContentProps {
  name: string;
  averagePrice: string;
  currentPrice: string;
  changeRate: number;
}

export default function MyStockContent({
  name,
  averagePrice,
  currentPrice,
  changeRate,
}: MyStockContentProps) {
  const isPositive = changeRate >= 0;

  return (
    <div className={styles.container}>
      <div className={styles.corpInfoWrapper}>
        <div className={styles.corpInfoLogo}></div>
        <div className={styles.corpInfoTitleWrapper}>
          <span className={styles.corpInfoTitle}>{name}</span>
          <span className={styles.averagePrice}>{averagePrice}</span>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>{currentPrice}</span>
        <span className={isPositive ? styles.increase : styles.decrease}>
          {isPositive ? "+" : ""}
          {changeRate}%
        </span>
      </div>
    </div>
  );
}
