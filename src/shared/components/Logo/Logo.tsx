import { useState } from "react";
import * as styles from "./Logo.css";

interface LogoProps {
  src?: string | null;
  alt: string;
  size?: number;
  className?: string;
}

export function Logo({ src, alt, size = 40, className }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  const sizeStyle = { width: size, height: size };

  if (!src || hasError) {
    return (
      <div
        className={[styles.fallback, className].filter(Boolean).join(" ")}
        style={sizeStyle}
        aria-label={alt}
      />
    );
  }

  return (
    <img
      className={[styles.base, className].filter(Boolean).join(" ")}
      style={sizeStyle}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
