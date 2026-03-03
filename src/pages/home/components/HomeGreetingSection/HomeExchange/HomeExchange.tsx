import * as styles from "./HomeExchange.css";
import { HomeCoinOne, HomeCoinTwo } from "@/assets/icons/components";

type ExchangeVariant = "default" | "compact" | "highlight";

interface HomeExchangeProps {
  variant: ExchangeVariant;
  title: string;
  description: string;
  rate: number;
}

export default function HomeExchange({
  variant,
  title = "환전소",
  description,
  rate,
}: HomeExchangeProps) {
  const formattedRate = rate.toLocaleString();

  return (
    <div className={styles.container({ variant })}>
      {variant === "default" && (
        <>
          <div className={styles.defaultIconWrapper}>
            <HomeCoinOne className={styles.icon({ variant })} />
            <div className={styles.textGroup({ variant })}>
              <span className={styles.subText}>{description}</span>
              <span className={styles.title}>{title}</span>
            </div>
          </div>
          <div className={styles.rateGroup}>
            <span className={styles.rate({ variant })}>{formattedRate}</span>
          </div>
        </>
      )}
      {variant === "compact" && (
        <>
          <HomeCoinOne className={styles.icon({ variant })} />
          <div className={styles.textGroup({ variant })}>
            <span className={styles.subText}>{description}</span>
            <span className={styles.title}>
              {title} · {formattedRate}
            </span>
          </div>
        </>
      )}
      {variant === "highlight" && (
        <>
          <HomeCoinTwo className={styles.icon({ variant })} />
          <div className={styles.textGroup({ variant })}>
            <span className={styles.subText}>{description}</span>
            <span className={styles.title}>
              {title} · {formattedRate}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
