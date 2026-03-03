import * as styles from "./Market.css";
import { MajorNewsSection, MarketIndexSection, TodaysPick, SocialTrading } from "./components";

export default function Market() {
  return (
    <div className={styles.container}>
      <MajorNewsSection />

        <MarketIndexSection/>

      <TodaysPick />
      <SocialTrading />
    </div>
  );
}
