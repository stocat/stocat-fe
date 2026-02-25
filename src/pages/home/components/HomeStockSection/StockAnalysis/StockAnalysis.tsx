import { AiSparkle, CharacterSnovy } from "@/assets/icons/components";
import * as styles from "./StockAnalysis.css";

export default function StockAnalysis() {
  return (
    <div className={styles.container}>
      <CharacterSnovy width={46} height={46} className={styles.character} />
      <div className={styles.analysisWrapper}>
        <div className={styles.titleWrapper}>
          <AiSparkle width={12} height={12} className={styles.sparkleIcon} />
          <span className={styles.title}>스노비의 분석 요약</span>
        </div>
        <div className={styles.analysisContent}>
          수희님은 최근 여행 업종 비중이 확대됐어요 분할 접근이 부담을 줄일 수
          있어요.
        </div>
      </div>
    </div>
  );
}
