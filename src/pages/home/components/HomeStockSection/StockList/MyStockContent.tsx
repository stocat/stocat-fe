import * as styles from "./MyStockContent.css";
import { ChangeRate, Logo } from "@/shared/components";

type Currency = "dollar" | "won";

interface MyStockContentProps {
  name: string;
  averagePrice: string;
  averagePriceDollar: string;
  currentPrice: string;
  currentPriceDollar: string;
  changeRate: number;
  currency: Currency;
}

export default function MyStockContent({
  name,
  averagePrice,
  averagePriceDollar,
  currentPrice,
  currentPriceDollar,
  changeRate,
  currency,
}: MyStockContentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.corpInfoWrapper}>
        <Logo src={undefined} alt={name} size={46} />
        <div className={styles.corpInfoTitleWrapper}>
          <span className={styles.corpInfoTitle}>{name}</span>
          <span className={styles.averagePrice}>
            {currency === "won" ? averagePrice : averagePriceDollar}
          </span>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>
          {currency === "won" ? currentPrice : currentPriceDollar}
        </span>
        <ChangeRate value={changeRate} />
      </div>
    </div>
  );
}
