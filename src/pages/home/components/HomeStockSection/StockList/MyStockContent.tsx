import * as styles from "./MyStockContent.css";

export default function MyStockContent({}) {
  return (
    <div className={styles.container}>
      <div className={styles.corpInfoWrapper}>
        <div className={styles.corpInfoLogo}></div>
        <div className={styles.corpInfoTitleWrapper}>
          <span className={styles.corpInfoTitle}>하나투어</span>
          <span className={styles.averagePrice}>1주 47,550원</span>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>588,481원</span>
        <span className={styles.decrease}>-0.8%</span>
      </div>
    </div>
  );
}
