import * as styles from "./Market.css";
import { MajorNewsSection } from "./components/MajorNewsSection";

import { TodaysPick } from "./components/TodaysPick";
import { SocialTrading } from "./components/SocialTrading";

import {MarketIndexSection} from "@/pages/market/components/MarketIndexSection";

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
