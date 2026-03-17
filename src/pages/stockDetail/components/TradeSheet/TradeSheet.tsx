import { useState } from "react";
import type { CategoryTag } from "../../StockDetail.types";
import { CurrencyToggle } from "@/shared/components";
import * as styles from "./TradeSheet.css";

const MOCK_WALLET = 505100;
const MOCK_HOLDINGS = 3;

const KEYPAD_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "←"];

interface TradeSheetProps {
  mode: "buy" | "sell";
  stockName: string;
  stockPrice: number;
  categories: CategoryTag[];
  changePercent: number;
  isPositive: boolean;
  onClose: () => void;
}

export function TradeSheet({
  mode,
  stockName,
  stockPrice,
  categories,
  changePercent,
  isPositive,
  onClose,
}: TradeSheetProps) {
  const [currency, setCurrency] = useState<"dollar" | "won">("won");
  const [quantity, setQuantity] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const qty = parseInt(quantity || "0", 10);
  const totalAmount = qty * stockPrice;
  const canAfford = mode === "buy" ? totalAmount <= MOCK_WALLET : true;
  const canSell = mode === "sell" ? qty <= MOCK_HOLDINGS : true;
  const isDisabled = qty === 0 || !canAfford || !canSell;
  const showError = mode === "buy" && qty > 0 && !canAfford;

  const changeSign = changePercent > 0 ? "+" : "";
  const changeText = `${changeSign}${changePercent.toFixed(1)}%`;

  function handleKeyPress(key: string) {
    if (key === "←") {
      setQuantity((prev) => prev.slice(0, -1));
    } else if (key !== "") {
      setQuantity((prev) => (prev === "0" ? key : prev + key));
    }
  }

  return (
    <div className={styles.overlay}>
      {/* Stock mini-header */}
        <div className={styles.stockHeader}>
          <div className={styles.tagRow}>
            {categories.map((cat, i) => (
              <span key={i} className={styles.tag}>
                {cat.label}
              </span>
            ))}
          </div>
          <h1 className={styles.stockName}>{stockName}</h1>
          <div className={styles.priceRow}>
            <div className={styles.priceGroup}>
              <span className={styles.price}>
                {stockPrice.toLocaleString("ko-KR")}원
              </span>
              <span className={isPositive ? styles.changePositive : styles.changeNegative}>
                {changeText}
              </span>
            </div>
            <CurrencyToggle currency={currency} onChange={setCurrency} />
          </div>
        </div>

        {/* Info rows */}
        <div className={styles.infoSection}>
          {mode === "buy" ? (
            <>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>나의지갑</span>
                <span className={styles.infoValue}>
                  <span className={styles.infoUnit}>원화</span>
                  {MOCK_WALLET.toLocaleString("ko-KR")}원
                </span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>현재가</span>
                <span className={styles.infoValue}>
                  약 {stockPrice.toLocaleString("ko-KR")}원
                </span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>현재가</span>
                <span className={styles.infoValue}>
                  {stockPrice.toLocaleString("ko-KR")}원
                </span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>보유수량</span>
                <span className={styles.infoValue}>{MOCK_HOLDINGS}주</span>
              </div>
            </>
          )}
        </div>

        {/* Question box */}
        <div className={styles.questionBox}>
          <span className={styles.questionText}>
            몇 주를 {mode === "buy" ? "구매" : "판매"}할까요?
          </span>
          <span className={showError ? styles.quantityError : styles.quantity}>
            {qty === 0 ? "0주" : `${qty}주`}
          </span>
        </div>

        {showError && (
          <p className={styles.errorMessage}>잔액이 부족해요!</p>
        )}

        {/* Keypad */}
        <div className={styles.keypad}>
          {KEYPAD_KEYS.map((key, i) => (
            <button
              key={i}
              type="button"
              className={key === "" ? styles.keyEmpty : styles.key}
              onClick={() => handleKeyPress(key)}
              disabled={key === ""}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Action button */}
        <div className={styles.actionArea}>
          <button
            type="button"
            className={isDisabled ? styles.actionButtonDisabled : styles.actionButton}
            disabled={isDisabled}
            onClick={() => setShowConfirm(true)}
          >
            {mode === "buy" ? "구매하기" : "판매하기"}
          </button>
        </div>

      {/* Confirmation modal */}
      {showConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmSheet}>
            <h2 className={styles.confirmTitle}>
              {stockName} {qty}주를 {mode === "buy" ? "구매" : "판매"}하시겠어요?
            </h2>
            <div className={styles.confirmRow}>
              <span className={styles.confirmLabel}>
                {mode === "buy" ? "총 주문 금액" : "총 판매 금액"}
              </span>
              <span className={styles.confirmValue}>
                {totalAmount.toLocaleString("ko-KR")}원
              </span>
            </div>
            <div className={styles.confirmRow}>
              <span className={styles.confirmLabel}>
                {mode === "buy" ? "구매 후 나의 지갑" : "판매 후 나의 지갑"}
              </span>
              <span className={styles.confirmValue}>
                {(mode === "buy"
                  ? MOCK_WALLET - totalAmount
                  : MOCK_WALLET + totalAmount
                ).toLocaleString("ko-KR")}원
              </span>
            </div>
            <div className={styles.confirmButtons}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setShowConfirm(false)}
              >
                취소
              </button>
              <button
                type="button"
                className={styles.confirmButton}
                onClick={onClose}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
