import { useMemo, useState } from "react";
import * as styles from "./StockListSection.css";
import { MyStockContent } from "@/shared/components";
import { MARKET_FILTERS, MOCK_MY_STOCKS, type Market } from "../../MyInvestment.mock";

type Currency = "dollar" | "won";

interface StockListSectionProps {
  currency: Currency;
}

export default function StockListSection({ currency }: StockListSectionProps) {
  const [selectedMarket, setSelectedMarket] = useState<Market>("전체");

  const filteredStocks = useMemo(() => {
    if (selectedMarket === "전체") return MOCK_MY_STOCKS;
    return MOCK_MY_STOCKS.filter((s) => s.market === selectedMarket);
  }, [selectedMarket]);

  return (
    <section className={styles.container}>
      <div className={styles.sortRow}>
        <button className={styles.sortButton}>직접 설정한 순</button>
      </div>
      <div className={styles.tabList}>
        {MARKET_FILTERS.map((market) => (
          <button
            key={market}
            aria-selected={market === selectedMarket}
            className={styles.tab}
            onClick={() => setSelectedMarket(market)}
          >
            {market}
          </button>
        ))}
      </div>
      <div className={styles.contentList}>
        {filteredStocks.map((stock) => (
          <MyStockContent key={stock.id} {...stock} currency={currency} />
        ))}
      </div>
    </section>
  );
}
