import * as styles from "./AnalysisSection.css";

interface AnalysisItem {
  id: number;
  description: string;
}

interface AnalysisSectionProps {
  items: AnalysisItem[];
  link: string;
}

export default function AnalysisSection({ items, link }: AnalysisSectionProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>어떤 영향으로 떨어졌을까요?</span>
      <div className={styles.cardList}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={styles.cardDescription}>{item.description}</span>
          </div>
        ))}
      </div>
      <span className={styles.cardLink}>{link}</span>
    </div>
  );
}
