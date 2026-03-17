import * as styles from "./PortfolioSection.css";
import PortfolioBar from "./PortfolioBar";
import PortfolioItem from "./PortfolioItem";
import { MOCK_PORTFOLIO_ITEMS } from "../../MyInvestment.mock";

export default function PortfolioSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>나의 투자비중</span>
        <PortfolioBar items={MOCK_PORTFOLIO_ITEMS} />
      </div>
      <div className={styles.itemList}>
        {MOCK_PORTFOLIO_ITEMS.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
