import * as styles from "./Badge.css";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span className={[styles.badge, className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
