import { ArrowRight } from "@/assets/icons/components";
import * as styles from "./RateCardSection.css";

interface RateCard {
  from: string;
  to: string;
  rate: string;
}

interface RateCardSectionProps {
  dollarToWon: RateCard;
  wonToDollar: RateCard;
}

export default function RateCardSection({
  dollarToWon,
  wonToDollar,
}: RateCardSectionProps) {
  return (
    <div className={styles.container}>
      {[dollarToWon, wonToDollar].map((card) => (
        <div key={`${card.from}-${card.to}`} className={styles.card}>
          <div className={styles.cardTitleRow}>
            <span className={styles.cardCurrency}>{card.from}</span>
            <ArrowRight width={16} height={16} />
            <span className={styles.cardCurrency}>{card.to}</span>
          </div>
          <span className={styles.cardRate}>{card.rate}</span>
        </div>
      ))}
    </div>
  );
}
