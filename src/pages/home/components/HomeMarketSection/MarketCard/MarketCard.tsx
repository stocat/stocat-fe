import * as styles from "./MarketCard.css";

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
  const isPositive = changeRate >= 0;
  const changeColor = isPositive ? "#FF383C" : "#2E7BF6";
  const changeText = `${isPositive ? "+" : ""}${changeRate}%`;

  return (
    <div className={styles.layout[variant]}>
      <img className={styles.logo} src={logoUrl} alt={name} />
      <div className={styles.info[variant]}>
        <div className={styles.nameRow[variant]}>
          <span className={styles.name}>{name}</span>
          <span className={styles.badge}>{sector}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.changeRate} style={{ color: changeColor }}>
            {changeText}
          </span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </div>
  );
}
