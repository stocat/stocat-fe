import * as styles from "./Home.css";
import {
  HomeGreetingSection,
  HomeMarketSection,
  HomeStockSection,
} from "./components";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeGreetingSection />
      <HomeStockSection />
      <HomeMarketSection />
    </div>
  );
}
