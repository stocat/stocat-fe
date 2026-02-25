import * as styles from "./Home.css";
import HomeBanner from "./components/HomeBanner/HomeBanner";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeBanner />
    </div>
  );
}
