import * as styles from "./Market.css";
import { Summary } from "./components/Summary";

import { TodaysPick } from "./components/TodaysPick";
import { SocialTrading } from "./components/SocialTrading";
import { Kospi } from "./components/Kospi";

export default function Market() {
  return (
    <div className={styles.container}>
      <Summary />

      <div className={styles.bar} />
      <Kospi />

      <TodaysPick />
      <SocialTrading />
    </div>
  );
}
