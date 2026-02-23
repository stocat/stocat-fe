import * as styles from "./FeedSection.css";

interface FeedSectionProps {
  stockName: string;
}

export default function FeedSection({ stockName }: FeedSectionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{stockName} 피드</h2>
      </div>
    </section>
  );
}
