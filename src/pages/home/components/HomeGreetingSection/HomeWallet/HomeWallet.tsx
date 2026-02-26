import { VectorRight } from "@/assets/icons/components";
import * as styles from "./HomeWallet.css";

interface HomeWalletProps {
  won: string;
  dollar: string;
  updatedAt: string;
}

export default function HomeWallet({ won, dollar, updatedAt }: HomeWalletProps) {
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
        <div className={styles.currentTime}>{updatedAt} 기준</div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <span className={styles.currency}>원화</span>
          <span className={styles.balance}>{won} 원</span>
        </div>
        <div className={styles.button}>
          <span className={styles.currency}>달러</span>
          <span className={styles.balance}>$ {dollar}</span>
        </div>
      </div>
    </section>
  );
}
