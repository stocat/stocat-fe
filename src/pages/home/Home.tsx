import * as styles from "./Home.css";
import {
  HomeGreetingSection,
  HomeMarketSection,
  HomeStockSection,
} from "./components";
import { MOCK_GREETING, MOCK_WALLET } from "./components/HomeGreetingSection/HomeGreetingSection.mock";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeGreetingSection
        name={MOCK_GREETING.name}
        remainingHours={MOCK_GREETING.remainingHours}
        remainingMinutes={MOCK_GREETING.remainingMinutes}
        wallet={MOCK_WALLET}
      />
      <HomeStockSection
        remainingHours={MOCK_GREETING.remainingHours}
        remainingMinutes={MOCK_GREETING.remainingMinutes}
      />
      <HomeMarketSection />
    </div>
  );
}
