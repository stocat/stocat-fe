import { useState } from "react";
import { useParams } from "react-router-dom";
import * as styles from "./StockDetail.css";
import type { TabType, PeriodType } from "./StockDetail.types";
import { tabs, periods, getStockById } from "./StockDetail.mock";

import { StockHeader } from "./components/StockHeader";
import { TabNav } from "./components/TabNav";
import { PeriodSelector } from "./components/PeriodSelector";
import { ChartArea } from "./components/ChartArea";
import { PriceInfo } from "./components/PriceInfo";
import { CategoryTags } from "./components/CategoryTags";
import { FinancialSummary } from "./components/FinancialSummary";
import { NewsSection } from "./components/NewsSection";
import { FeedSection } from "./components/FeedSection";

export default function StockDetail() {
  const { stockId } = useParams<{ stockId: string }>();
  const [activeTab, setActiveTab] = useState<TabType>("info");
  const [activePeriod, setActivePeriod] = useState<PeriodType>("1D");

  const stock = getStockById(stockId || "");

  if (!stock) {
    return (
      <div className={styles.container}>
        <p>종목을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <StockHeader
        name={stock.name}
        price={stock.price}
        changePercent={stock.changePercent}
      />

      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "info" && (
        <>
          <div className={styles.section}>
            <PeriodSelector
              periods={periods}
              activePeriod={activePeriod}
              onPeriodChange={setActivePeriod}
            />
            <ChartArea stockId={stock.id} />
          </div>

          <div className={styles.section}>
            <PriceInfo priceInfo={stock.priceInfo} />
          </div>

          <div className={styles.section}>
            <CategoryTags categories={stock.categories} />
            <FinancialSummary />
          </div>

          <div className={styles.divider} />

          <NewsSection
            title="산업 소식"
            news={stock.industryNews}
            showHelp
            showMore
          />

          <div className={styles.divider} />

          <NewsSection
            title="기업 소식"
            news={stock.companyNews}
            showPlaceholder
          />

          <div className={styles.divider} />

          <FeedSection stockName={stock.name} />
        </>
      )}

      {activeTab === "myStock" && (
        <div className={`${styles.section} ${styles.sectionPadding}`}>
          <p>나의 주식 정보가 여기에 표시됩니다.</p>
        </div>
      )}
    </div>
  );
}
