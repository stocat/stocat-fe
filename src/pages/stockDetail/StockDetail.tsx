import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as styles from "./StockDetail.css";
import type { TabType, PeriodType, CategoryTag } from "./StockDetail.types";
import { tabs, periods, getStockById } from "./StockDetail.mock";
import {
  StockHeader,
  TabNav,
  PeriodSelector,
  ChartArea,
  PriceInfo,
  InfluenceSection,
  NewsSection,
  FeedSection,
  TradeSheet,
} from "./components";
import { useTrade } from "@/app/TradeContext";

interface NavStock {
  name: string;
  price: number;
  changePercent: number;
  categories: CategoryTag[];
}

function formatPrice(price: number): string {
  return `${price.toLocaleString("ko-KR")}원`;
}

function formatChangePercent(percent: number): string {
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent.toFixed(1)}%`;
}

export default function StockDetail() {
  const { stockId } = useParams<{ stockId: string }>();
  const location = useLocation();
  const navStock = (location.state as { stock?: NavStock } | null)?.stock;
  const { mode, close } = useTrade();

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

  const displayName = navStock?.name ?? stock.name;
  const displayPrice = navStock?.price ?? stock.price;
  const displayChangePercent = navStock?.changePercent ?? stock.changePercent;
  const displayCategories = navStock?.categories ?? [
    { label: stock.industry, type: "industry" as const },
  ];

  if (mode) {
    return (
      <TradeSheet
        mode={mode}
        stockName={displayName}
        stockPrice={displayPrice}
        categories={displayCategories}
        changePercent={displayChangePercent}
        isPositive={displayChangePercent > 0}
        onClose={close}
      />
    );
  }

  return (
    <div className={styles.container}>
      <StockHeader
        categories={displayCategories}
        name={displayName}
        value={formatPrice(displayPrice)}
        change={formatChangePercent(displayChangePercent)}
        isPositive={displayChangePercent > 0}
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
            <PriceInfo stockId={stock.id} />
          </div>

          <div className={styles.divider} />

          <InfluenceSection
            reasons={stock.influenceReasons}
            stockName={stock.name}
          />

          <div className={styles.divider} />

          <NewsSection
            industryNews={stock.industryNews}
            companyNews={stock.companyNews}
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
