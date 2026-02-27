import * as styles from "./FinancialSummary.css";

interface FinancialSummaryProps {
  onClick?: () => void;
}

export default function FinancialSummary({ onClick }: FinancialSummaryProps) {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={onClick}>
        재무제표 요약(무슨 발표 내용?)
      </button>
    </div>
  );
}
