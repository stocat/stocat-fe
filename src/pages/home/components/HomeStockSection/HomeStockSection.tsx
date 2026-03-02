import { useState } from "react";
import * as styles from "./HomeStockSection.css";
import { MOCK_BALANCE } from "./HomeStockSection.mock";

import { VectorRight } from "@/assets/icons/components";

import StockAnalysis from "./StockAnalysis/StockAnalysis";
import StockList from "./StockList/StockList";
import ChangeRate from "@/shared/components/ChangeRate";

const FILTERS = ["직접 설정한 순", "현재가", "평가금액"] as const;
type Filter = (typeof FILTERS)[number];

export default function HomeStockSection() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("직접 설정한 순");

  return (
    <section className={styles.container}>
      <button className={styles.ctaMyStocks}>
        <span className={styles.ctaMyStockTitle}>내 종목 보기</span>
        <VectorRight
          width={6}
          height={12}
          className={styles.ctaMyStockVector}
        />
      </button>
      <div className={styles.balanceContainer}>
        <span className={styles.currentBalance}>{MOCK_BALANCE.total}</span>
        <ChangeRate
          value={MOCK_BALANCE.variationRate}
          typography="body2"
          className={styles.currentVariation}
        >
          {`+${MOCK_BALANCE.variationAmount.toLocaleString()}원 (${MOCK_BALANCE.variationRate}%)`}
        </ChangeRate>
      </div>
      <StockList
        filters={FILTERS}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <StockAnalysis />
    </section>
  );
}
