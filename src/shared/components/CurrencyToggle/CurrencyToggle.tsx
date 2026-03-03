import * as styles from "./CurrencyToggle.css";

type Currency = "dollar" | "won";

interface CurrencyToggleProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
  className?: string;
}

export function CurrencyToggle({
  currency,
  onChange,
  className,
}: CurrencyToggleProps) {
  function handleClick() {
    onChange(currency === "dollar" ? "won" : "dollar");
  }

  return (
    <button
      role="switch"
      aria-checked={currency === "won"}
      className={[styles.track({ currency }), className]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
    >
      <span className={styles.icon({ currency })}>
        {currency === "dollar" ? "$" : "₩"}
      </span>
      <span className={styles.thumb({ currency })} />
    </button>
  );
}
