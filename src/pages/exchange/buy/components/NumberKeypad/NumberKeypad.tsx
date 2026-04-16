import * as styles from "./NumberKeypad.css";
import { ArrowLeft } from "@/assets/icons/components";

const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", "←"],
];

interface NumberKeypadProps {
  onPress: (key: string) => void;
  onBuyPress: () => void;
  isBuyEnabled: boolean;
}

export default function NumberKeypad({
  onPress,
  onBuyPress,
  isBuyEnabled,
}: NumberKeypadProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {KEYS.flat().map((key, index) => {
          if (key === "") {
            return <div key={`empty-${index}`} className={styles.emptyCell} />;
          }
          if (key === "←") {
            return (
              <button
                key="backspace"
                className={styles.key}
                onClick={() => onPress("←")}
              >
                <ArrowLeft className={styles.backspaceIcon} />
              </button>
            );
          }
          return (
            <button key={key} className={styles.key} onClick={() => onPress(key)}>
              {key}
            </button>
          );
        })}
      </div>
      <button
        className={
          isBuyEnabled
            ? styles.buyButtonVariants.enabled
            : styles.buyButtonVariants.disabled
        }
        onClick={isBuyEnabled ? onBuyPress : undefined}
        disabled={!isBuyEnabled}
      >
        구매하기
      </button>
    </div>
  );
}
