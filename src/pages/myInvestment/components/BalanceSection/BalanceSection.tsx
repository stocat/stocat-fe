import * as styles from "./BalanceSection.css";
import { ChangeRate, CurrencyToggle } from "@/shared/components";
import { MOCK_MY_BALANCE } from "../../MyInvestment.mock";

type Currency = "dollar" | "won";

interface BalanceSectionProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export default function BalanceSection({
  currency,
  onCurrencyChange,
}: BalanceSectionProps) {
  const balance = MOCK_MY_BALANCE[currency];

  return (
    <section className={styles.container}>
      <span className={styles.period}>1월 4주차</span>
      <div className={styles.balanceRow}>
        <div className={styles.balanceInfo}>
          <span className={styles.totalBalance}>{balance.total}</span>
          <ChangeRate
            value={balance.variationRate}
            typography="body2"
          >
            {currency === "won"
              ? `+${MOCK_MY_BALANCE.won.variationAmount.toLocaleString()}원 (${MOCK_MY_BALANCE.won.variationRate}%)`
              : `+$${MOCK_MY_BALANCE.dollar.variationAmount} (${MOCK_MY_BALANCE.dollar.variationRate}%)`}
          </ChangeRate>
        </div>
        <CurrencyToggle currency={currency} onChange={onCurrencyChange} />
      </div>
      <div className={styles.summaryRow}>
        <div className={styles.summaryLine}>
          <span className={styles.summaryLabel}>원금</span>
          <span className={styles.summaryItem}>{balance.principal}</span>
        </div>
        <div className={styles.summaryLine}>
          <span className={styles.summaryLabel}>총 수익</span>
          <ChangeRate value={balance.totalProfitRate} typography="body4">
            {balance.totalProfit} ({Math.abs(balance.totalProfitRate)}%)
          </ChangeRate>
        </div>
      </div>
    </section>
  );
}
