import * as styles from "./MyStockContent.css";
import { ChangeRate, Logo } from "@/shared/components";

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
  return (
    <div className={styles.container}>
      <div className={styles.corpInfoWrapper}>
        <Logo src={undefined} alt={name} size={46} />
        <div className={styles.corpInfoTitleWrapper}>
          <span className={styles.corpInfoTitle}>{name}</span>
          <span className={styles.averagePrice}>{averagePrice}</span>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>{currentPrice}</span>
        <ChangeRate value={changeRate} />
      </div>
    </div>
  );
}
