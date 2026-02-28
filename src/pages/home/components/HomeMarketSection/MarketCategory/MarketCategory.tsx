import * as styles from "./MarketCategory.css";
import MarketCard from "../MarketCard/MarketCard";

interface MarketStock {
  name: string;
  sector: string;
  changeRate: number;
  price: string;
  logoUrl?: string;
}

interface MarketCategoryProps {
  variant: "horizontal" | "vertical";
  stocks: MarketStock[];
}

export default function MarketCategory({ variant, stocks }: MarketCategoryProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid[variant]}>
        {stocks.map((stock) => (
          <MarketCard
            key={stock.name}
            variant={variant}
            name={stock.name}
            sector={stock.sector}
            changeRate={stock.changeRate}
            price={stock.price}
            logoUrl={stock.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}
