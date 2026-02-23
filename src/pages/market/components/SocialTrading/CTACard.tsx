import * as styles from "./CTACard.css";

interface CTACardProps {
  label: string;
  hasDecoration?: boolean;
  onClick?: () => void;
}

export default function CTACard({ label, hasDecoration, onClick }: CTACardProps) {
  return (
      <button type="button" className={styles.card} onClick={onClick}>
        <span className={styles.label}>{label}</span>


        {hasDecoration && <span className={styles.decoration} aria-hidden="true" />}
      </button>
  );
}