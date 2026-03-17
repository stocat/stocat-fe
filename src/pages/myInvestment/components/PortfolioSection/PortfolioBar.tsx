import * as styles from "./PortfolioBar.css";

interface PortfolioBarSegment {
  percent: number;
  color: string;
  name: string;
}

interface PortfolioBarProps {
  items: PortfolioBarSegment[];
}

export default function PortfolioBar({ items }: PortfolioBarProps) {
  return (
    <div className={styles.bar}>
      {items.map((item) => (
        <div
          key={item.name}
          className={styles.segment}
          style={{ width: `${item.percent}%`, backgroundColor: item.color }}
        />
      ))}
    </div>
  );
}
