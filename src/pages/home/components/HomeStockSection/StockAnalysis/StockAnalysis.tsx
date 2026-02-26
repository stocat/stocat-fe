import { AiSparkle, CharacterSnovy } from "@/assets/icons/components";
import * as styles from "./StockAnalysis.css";
import { MOCK_ANALYSIS } from "../HomeStockSection.mock";

export default function StockAnalysis() {
  return (
    <div className={styles.container}>
      <CharacterSnovy width={46} height={46} className={styles.character} />
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
