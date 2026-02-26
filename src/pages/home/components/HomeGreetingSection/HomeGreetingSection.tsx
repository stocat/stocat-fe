import * as styles from "./HomeGreetingSection.css";
import { MOCK_GREETING } from "./HomeGreetingSection.mock";

import HomeBanner from "./HomeBanner/HomeBanner";
import HomeWallet from "./HomeWallet/HomeWallet";

export default function HomeGreetingSection() {
  return (
    <section className={styles.container}>
      <HomeBanner />
      <div className={styles.textArea}>
        <span className={styles.title}>
          안녕하세요, {MOCK_GREETING.name} 님!
        </span>
        <span className={styles.subTitle}>
          {MOCK_GREETING.remainingHours}시간 {MOCK_GREETING.remainingMinutes}분
          뒤면 종목이 소멸돼요!
        </span>
      </div>
      <HomeWallet />
    </section>
  );
}
