import { VectorRight } from "@/assets/icons/components";
import * as styles from "./HomeWallet.css";

const MOCK_DATA = {
  MOCK_WON: "505,000",
  MOCK_DOLLAR: "100",
};

export default function HomeWallet() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <button className={styles.ctaMyWallet}>
          <span>나의 지갑</span>
          <VectorRight
            width={6}
            height={12}
            className={styles.ctaMyWalletVector}
          />
        </button>
        <div className={styles.currentTime}>20:42 기준</div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <span className={styles.currency}>원화</span>
          <span className={styles.balance}>{MOCK_DATA.MOCK_WON} 원</span>
        </div>
        <div className={styles.button}>
          <span className={styles.currency}>달러</span>
          <span className={styles.balance}>$ {MOCK_DATA.MOCK_DOLLAR}</span>
        </div>
      </div>
    </section>
  );
}
