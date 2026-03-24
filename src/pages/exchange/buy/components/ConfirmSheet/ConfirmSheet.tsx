import type { ExchangePreview } from "@/apis/exchange/exchange.types";
import * as styles from "./ConfirmSheet.css";

interface ConfirmSheetProps {
  preview: ExchangePreview;
  krwBalance: number;
  usdBalance: number;
  onConfirm: () => void;
  onBack: () => void;
}

export default function ConfirmSheet({
  preview,
  krwBalance,
  usdBalance,
  onConfirm,
  onBack,
}: ConfirmSheetProps) {
  const commission = Math.round(preview.fromAmount * 0.015);
  const krwAfter = krwBalance - preview.fromAmount;
  const usdAfter = usdBalance + preview.toAmount;

  return (
    <div className={styles.overlay} onClick={onBack}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>
          {preview.fromAmount.toLocaleString()}원을 ${preview.toAmount.toFixed(2)}로 환전하시겠어요?
        </p>
        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>수수료 (1.5%)</span>
            <span className={styles.infoValue}>
              {commission.toLocaleString()}원
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>환전 후 나의 지갑</span>
            <div className={styles.walletValues}>
              <span className={styles.infoValue}>
                {krwAfter.toLocaleString()}원
              </span>
              <span className={styles.infoValue}>${usdAfter.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.backButton} onClick={onBack}>
            뒤로가기
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
