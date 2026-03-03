import { useState } from "react";
import * as styles from "./HomeStockSection.css";
import { MOCK_BALANCE } from "./HomeStockSection.mock";

import { VectorRight } from "@/assets/icons/components";

import StockAnalysis from "./StockAnalysis/StockAnalysis";
import StockList from "./StockList/StockList";
import { ChangeRate, CurrencyToggle } from "@/shared/components";

const FILTERS = ["현재가", "평가금액"] as const;
type Filter = (typeof FILTERS)[number];

type Currency = "dollar" | "won";

interface HomeStockSectionProps {
  remainingHours: string;
  remainingMinutes: string;
}

export default function HomeStockSection({
  remainingHours,
  remainingMinutes,
}: HomeStockSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("현재가");
  const [currency, setCurrency] = useState<Currency>("won");

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
        <div className={styles.balanceWrapper}>
          <span className={styles.currentBalance}>
            {MOCK_BALANCE[currency].total}
          </span>
          <ChangeRate
            value={MOCK_BALANCE[currency].variationRate}
            typography="body2"
            className={styles.currentVariation}
          >
            {currency === "won"
              ? `+${MOCK_BALANCE.won.variationAmount.toLocaleString()}원 (${MOCK_BALANCE.won.variationRate}%)`
              : `+$${MOCK_BALANCE.dollar.variationAmount} (${MOCK_BALANCE.dollar.variationRate}%)`}
          </ChangeRate>
        </div>
        <CurrencyToggle currency={currency} onChange={setCurrency} />
      </div>
      <span className={styles.expiryNotice}>
        {remainingHours}시간 {remainingMinutes}분 뒤면 종목이 소멸돼요!
      </span>
      <StockList
        filters={FILTERS}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        currency={currency}
      />
      <StockAnalysis />
    </section>
  );
}
