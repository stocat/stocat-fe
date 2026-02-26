import { AiSparkle } from "@/assets/icons/components";
import * as styles from "./StockAnalysis.css";
import { MOCK_ANALYSIS } from "../HomeStockSection.mock";

export default function StockAnalysis() {
  return (
    <div className={styles.container}>
      <img
        src="/svg/Character-Snovy.svg"
        width={46}
        height={46}
        alt="스노비"
        className={styles.character}
        loading="lazy"
      />
      <div className={styles.analysisWrapper}>
        <div className={styles.titleWrapper}>
          <AiSparkle width={12} height={12} className={styles.sparkleIcon} />
          <span className={styles.title}>스노비의 분석 요약</span>
        </div>
        <div className={styles.analysisContent}>{MOCK_ANALYSIS}</div>
      </div>
    </div>
  );
}
