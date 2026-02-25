import * as styles from "./HomeGreetingSection.css";

import HomeBanner from "./HomeBanner/HomeBanner";
import HomeWallet from "./HomeWallet/HomeWallet";

// 임시 데이터
const MOCK_NAME = "강희수";
const MOCK_HOUR = "24";
const MOCK_MINUTIES = "43";

export default function HomeGreetingSection() {
  return (
    <section className={styles.container}>
      <HomeBanner />
      <div className={styles.textArea}>
        <span className={styles.title}>안녕하세요, {MOCK_NAME} 님!</span>
        <span className={styles.subTitle}>
          {MOCK_HOUR}시간 {MOCK_MINUTIES}분 뒤면 종목이 소멸돼요!
        </span>
      </div>
      <HomeWallet />
    </section>
  );
}
