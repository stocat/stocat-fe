import * as styles from "./HomeMarketSection.css";
import { MOCK_KR, MOCK_US, MOCK_CRYPTO } from "./HomeMarketSection.mock";
import MarketCategory from "./MarketCategory/MarketCategory";

export default function HomeMarketSection() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTitle}>한국</div>
      <MarketCategory variant="horizontal" stocks={MOCK_KR} />

      <div className={styles.sectionTitle}>미국</div>
      <MarketCategory variant="horizontal" stocks={MOCK_US} />

      <div className={styles.sectionTitle}>CRYPTO</div>
      <MarketCategory variant="vertical" stocks={MOCK_CRYPTO} />
    </section>
  );
}
