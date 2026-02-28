import * as styles from "./HomeGreetingSection.css";

import HomeBanner from "./HomeBanner/HomeBanner";
import HomeWallet from "./HomeWallet/HomeWallet";

interface HomeGreetingSectionProps {
  name: string;
  remainingHours: string;
  remainingMinutes: string;
  wallet: {
    won: string;
    dollar: string;
    updatedAt: string;
  };
}

export default function HomeGreetingSection({
  name,
  remainingHours,
  remainingMinutes,
  wallet,
}: HomeGreetingSectionProps) {
  return (
    <section className={styles.container}>
      <HomeBanner />
      <div className={styles.textArea}>
        <span className={styles.title}>안녕하세요, {name} 님!</span>
        <span className={styles.subTitle}>
          {remainingHours}시간 {remainingMinutes}분 뒤면 종목이 소멸돼요!
        </span>
      </div>
      <HomeWallet
        won={wallet.won}
        dollar={wallet.dollar}
        updatedAt={wallet.updatedAt}
      />
    </section>
  );
}
