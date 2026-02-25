import * as styles from "./Home.css";

import HomeGreetingSection from "./components/HomeGreetingSection/HomeGreetingSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeGreetingSection />
    </div>
  );
}
