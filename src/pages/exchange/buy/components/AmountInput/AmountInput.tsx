import * as styles from "./AmountInput.css";
import { FlagKorea, FlagUsa } from "@/assets/icons/components";
import IconSwap from "@/assets/images/icon-swap.png";

interface AmountInputProps {
  amount: string;
  exchangeRate: number;
  isInsufficient: boolean;
  maxKrwAmount: number;
}

export default function AmountInput({
  amount,
  exchangeRate,
  isInsufficient,
  maxKrwAmount,
}: AmountInputProps) {
  const numericAmount = Number(amount) || 0;
  const usdAmount = exchangeRate > 0 ? numericAmount / exchangeRate : 0;
  const maxUsdAmount = exchangeRate > 0 ? maxKrwAmount / exchangeRate : 0;
  const hasAmount = numericAmount > 0;

  return (
    <div className={styles.container}>
      <p className={styles.hint}>
        <span className={styles.hintLabel}>달러 환율</span>
        <span className={styles.hintDivider}> | </span>
        <span>환전 금액은 선택된 시점을 기준으로 고정돼요</span>
      </p>
      {!hasAmount && (
        <p className={styles.placeholder}>얼마를 환전하고 싶으신가요?</p>
      )}
      <div className={styles.cardArea}>
        <div className={styles.card}>
          <FlagKorea className={styles.flag} />
          <div className={styles.cardRight}>
            <span className={hasAmount ? styles.cardAmount : styles.cardAmountEmpty}>
              {numericAmount.toLocaleString()} 원을
            </span>
            <span className={styles.cardSub}>
              {numericAmount.toLocaleString()}₩
            </span>
          </div>
        </div>
        <img src={IconSwap} alt="" className={styles.swapIcon} />
        <div className={styles.card}>
          <FlagUsa className={styles.flag} />
          <div className={styles.cardRight}>
            {isInsufficient ? (
              <>
                <span className={styles.errorText}>잔액이 부족해요!</span>
                <span className={styles.errorSub}>
                  ${maxUsdAmount.toFixed(2)}달러만 가능해요
                </span>
              </>
            ) : (
              <>
                <span className={hasAmount ? styles.cardAmount : styles.cardAmountEmpty}>
                  {usdAmount.toFixed(2)} 달러로
                </span>
                <span className={styles.cardSub}>${usdAmount.toFixed(2)}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
