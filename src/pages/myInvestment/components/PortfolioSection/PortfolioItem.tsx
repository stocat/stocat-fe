import * as styles from "./PortfolioItem.css";

interface PortfolioItemProps {
  name: string;
  amount: string;
  percent: number;
  color: string;
}

export default function PortfolioItem({
  name,
  amount,
  percent,
  color,
}: PortfolioItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span
          className={styles.dot}
          style={{ backgroundColor: color }}
        />
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.amount}>{amount}</span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.percent}>{percent}%</span>
      </div>
    </div>
  );
}
