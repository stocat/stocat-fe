import * as styles from "./WalletSection.css";

interface WalletPill {
  label: string;
  value: string;
}

interface WalletSectionProps {
  timestamp: string;
  won: WalletPill;
  dollar: WalletPill;
}

export default function WalletSection({
  timestamp,
  won,
  dollar,
}: WalletSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>나의 지갑</span>
        <span className={styles.timestamp}>{timestamp} 기준</span>
      </div>
      <div className={styles.pillList}>
        {[won, dollar].map((pill) => (
          <span key={pill.label} className={styles.pill}>
            <span className={styles.pillLabel}>{pill.label}</span>
            <span className={styles.pillValue}>{pill.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
