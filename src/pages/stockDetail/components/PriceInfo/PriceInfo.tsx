import type { PriceInfo as PriceInfoType } from "../../StockDetail.types";
import * as styles from "./PriceInfo.css";

interface PriceInfoProps {
  priceInfo: PriceInfoType;
}

function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}

function calculatePosition(current: number, low: number, high: number): number {
  if (high === low) return 50;
  return ((current - low) / (high - low)) * 100;
}

interface PriceRangeProps {
  label: string;
  lowLabel: string;
  highLabel: string;
  low: number;
  high: number;
  current: number;
}

function PriceRange({ label, lowLabel, highLabel, low, high, current }: PriceRangeProps) {
  const position = calculatePosition(current, low, high);

  return (
    <div className={styles.priceRow}>
      <div className={styles.rangeBar}>
        <div
          className={styles.rangeIndicator}
          style={{ left: `${Math.min(Math.max(position, 0), 100)}%` }}
        />
      </div>
      <div className={styles.rangeLabels}>
        <div>
          <span className={styles.rangeLabel}>{lowLabel}</span>
          <br />
          <span className={styles.rangeValue}>{formatPrice(low)}</span>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={styles.rangeLabel}>{highLabel}</span>
          <br />
          <span className={styles.rangeValue}>{formatPrice(high)}</span>
        </div>
      </div>
    </div>
  );
}

export default function PriceInfo({ priceInfo }: PriceInfoProps) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>시세</h2>
        <span className={styles.timestamp}>{priceInfo.lastUpdated}</span>
      </div>

      <PriceRange
        label="1일"
        lowLabel="1일 최저가"
        highLabel="1일 최고가"
        low={priceInfo.dailyLow}
        high={priceInfo.dailyHigh}
        current={priceInfo.currentPrice}
      />

      <PriceRange
        label="1년"
        lowLabel="1년 최저가"
        highLabel="1년 최고가"
        low={priceInfo.yearlyLow}
        high={priceInfo.yearlyHigh}
        current={priceInfo.currentPrice}
      />
    </section>
  );
}
