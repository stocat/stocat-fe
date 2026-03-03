import * as styles from "./HomeGreetingSection.css";

import HomeBanner from "./HomeBanner/HomeBanner";
import HomeWallet from "./HomeWallet/HomeWallet";
import HomeExchange from "./HomeExchange/HomeExchange";

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
      <HomeExchange
        variant="default"
        title="환전소"
        description="달러로 교환해보세요"
        rate={1444.78}
      />
      <HomeExchange
        variant="compact"
        title="환전소"
        description="달러로 교환해보세요"
        rate={1444.78}
      />
      <HomeExchange
        variant="highlight"
        title="환전소"
        description="달러로 교환해보세요"
        rate={1444.78}
      />
    </section>
  );
}
