import { useState } from "react";
import { ChangeRate } from "@/shared/components";
import * as styles from "./ExchangeRateSection.css";

const PERIOD_TABS = ["1일", "1주", "3달", "1년", "5년", "전체"] as const;
type PeriodTab = (typeof PERIOD_TABS)[number];

interface ExchangeRateSectionProps {
  rate: number;
  change: number;
  changePercent: number;
  date: string;
}

export default function ExchangeRateSection({
  rate,
  change,
  changePercent,
  date,
}: ExchangeRateSectionProps) {
  const [activeTab, setActiveTab] = useState<PeriodTab>("1일");

  const formattedRate = rate
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const changeSign = change >= 0 ? "+" : "-";
  const formattedChange = Math.abs(change).toFixed(2);
  const changeText = `${changeSign}${formattedChange}원 (${Math.abs(changePercent)}%)`;

  return (
    <div className={styles.container}>
      <span className={styles.title}>달러 환율</span>
      <div className={styles.rateRow}>
        <span className={styles.rateValue}>{formattedRate}원</span>
        <ChangeRate value={changePercent} typography="body4">
          {changeText}
        </ChangeRate>
      </div>
      <span className={styles.dateText}>{date}</span>
      <div className={styles.tabList} role="tablist">
        {PERIOD_TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={[
              styles.tab,
              activeTab === tab ? styles.tabActive : "",
            ].join(" ")}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.chartPlaceholder}>
        <span className={styles.chartPlaceholderText}>차트 영역</span>
      </div>
    </div>
  );
}
