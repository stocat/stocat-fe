import type { InfluenceReason } from "../../StockDetail.types";
import * as styles from "./InfluenceSection.css";

interface InfluenceSectionProps {
  reasons: InfluenceReason[];
  stockName: string;
}

// export default function InfluenceSection({ reasons, stockName }: InfluenceSectionProps) {
export default function InfluenceSection({ reasons }: InfluenceSectionProps) {
  return (
    <section className={styles.container}>
      {/*<h2 className={styles.title}>{stockName}이(가) 오른 이유가 뭘까요?</h2>*/}
      <h2 className={styles.title}>어떤 영향으로 올랐을까요?</h2>
      <div className={styles.reasonList}>
        {reasons.slice(0, 2).map((reason) => (
          <div key={reason.id} className={styles.reasonCard}>
            <span className={styles.reasonText}>{reason.text}</span>
          </div>
        ))}
      </div>
      <button type="button" className={styles.unknownButton}>
        잘 모르겠어요
      </button>
    </section>
  );
}
