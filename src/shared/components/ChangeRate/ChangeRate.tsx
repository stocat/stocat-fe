import * as styles from "./ChangeRate.css";

interface ChangeRateProps {
  value: number;
  typography?: "body2" | "body3" | "body4";
  className?: string;
  children?: React.ReactNode;
}

export function ChangeRate({
  value,
  typography = "body4",
  className,
  children,
}: ChangeRateProps) {
  const direction = value > 0 ? "positive" : value < 0 ? "negative" : "neutral";

  return (
    <span
      className={[
        styles.directionStyle[direction],
        styles.typographyStyle[typography],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children ?? `${value >= 0 ? "+" : ""}${value}%`}
    </span>
  );
}
