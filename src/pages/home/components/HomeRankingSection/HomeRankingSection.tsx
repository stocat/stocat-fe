import { RankingList } from "./RankingList/RankingList";
import * as styles from "./HomeRankingSection.css";

export default function HomeRankingSection() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTitle}>이번 주 랭킹</div>
      <RankingList />
    </section>
  );
}
