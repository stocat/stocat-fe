import { CharacterSnovy } from "@/assets/icons/components";
import type { ExchangeResult } from "@/apis/exchange/exchange.types";
import * as styles from "./CompleteScreen.css";

const MOCK_MIN_RATE = 1320;
const MOCK_MAX_RATE = 1400;

interface CompleteScreenProps {
  result: ExchangeResult;
  onReturn: () => void;
}

export default function CompleteScreen({
  result,
  onReturn,
}: CompleteScreenProps) {
  const rate = result.exchangeRate;
  const dotPosition = Math.min(
    Math.max(
      ((rate - MOCK_MIN_RATE) / (MOCK_MAX_RATE - MOCK_MIN_RATE)) * 100,
      0
    ),
    100
  );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.subHeading}>기다려주셔서 감사해요</span>
        <span className={styles.mainHeading}>환전이 완료되었어요!</span>
      </div>
      <CharacterSnovy
        className={styles.characterImage}
        width={124}
        height={124}
      />
      <div className={styles.resultCard}>
        <span className={styles.tag}>환율 예측 성공 +2포인트</span>
        <p className={styles.cardMessage}>
          {`굿 타이밍!\n${result.exchangeRate.toLocaleString()}원에 환전 완료했어요`}
        </p>
        <div className={styles.rateBarWrapper}>
          <div className={styles.rateBar}>
            <div
              className={styles.rateDot}
              style={{ left: `${dotPosition}%` }}
            />
          </div>
          <div className={styles.rateLabels}>
            <span className={styles.rateLabel}>
              최저 {MOCK_MIN_RATE.toLocaleString()}원
            </span>
            <span className={styles.rateLabel}>
              최고 {MOCK_MAX_RATE.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
      <button className={styles.returnButton} onClick={onReturn}>
        환전소로 돌아가기
      </button>
    </div>
  );
}
