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
  // name,
  wallet,
}: HomeGreetingSectionProps) {
  return (
    <section className={styles.container}>
      <HomeBanner />
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
