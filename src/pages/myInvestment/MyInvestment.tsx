import { useState } from "react";
import * as styles from "./MyInvestment.css";
import {
  BalanceSection,
  StockListSection,
  PortfolioSection,
  ExpiryBanner,
} from "./components";

type Currency = "dollar" | "won";

export default function MyInvestment() {
  const [currency, setCurrency] = useState<Currency>("won");

  return (
    <div className={styles.container}>
      <BalanceSection currency={currency} onCurrencyChange={setCurrency} />
      <StockListSection currency={currency} />
      <PortfolioSection />
      <ExpiryBanner />
    </div>
  );
}
