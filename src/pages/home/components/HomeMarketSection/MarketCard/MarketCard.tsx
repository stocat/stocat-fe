import * as styles from "./MarketCard.css";
import { Badge, ChangeRate } from "@/shared/components";

interface MarketCardProps {
  variant: "horizontal" | "vertical";
  name: string;
  sector: string;
  changeRate: number;
  price: string;
  logoUrl?: string;
}

export default function MarketCard({
  variant,
  name,
  sector,
  changeRate,
  price,
  logoUrl,
}: MarketCardProps) {
  return (
    <div className={styles.layout[variant]}>
      <img className={styles.logo} src={logoUrl} alt={name} />
      <div className={styles.info[variant]}>
        <div className={styles.nameRow[variant]}>
          <span className={styles.name}>{name}</span>
          <Badge>{sector}</Badge>
        </div>
        <div className={styles.priceRow}>
          <ChangeRate value={changeRate} typography="body3" />
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </div>
  );
}
