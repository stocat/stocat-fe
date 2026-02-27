import * as styles from "./ChartArea.css";

interface ChartAreaProps {
  stockId: string;
}

export default function ChartArea({ stockId: _stockId }: ChartAreaProps) {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder} aria-label="차트 영역" />
    </div>
  );
}
