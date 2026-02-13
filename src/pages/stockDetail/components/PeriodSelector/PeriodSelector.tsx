import type { Period, PeriodType } from "../../StockDetail.types";
import * as styles from "./PeriodSelector.css";

interface PeriodSelectorProps {
  periods: Period[];
  activePeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
  onDetailClick?: () => void;
}

export default function PeriodSelector({
  periods,
  activePeriod,
  onPeriodChange,
  onDetailClick,
}: PeriodSelectorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.periodList}>
        {periods.map((period) => (
          <button
            key={period.key}
            type="button"
            className={
              activePeriod === period.key
                ? styles.periodButtonActive
                : styles.periodButton
            }
            onClick={() => onPeriodChange(period.key)}
          >
            {period.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={styles.detailButton}
        onClick={onDetailClick}
      >
        차트 자세히 보기
      </button>
    </div>
  );
}
