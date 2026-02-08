import * as styles from "./BottomCTA.css";

interface BottomCTAProps {
  onClick?: () => void;
}

export default function BottomCTA({ onClick }: BottomCTAProps) {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      오늘의 픽 외의 기업에 대해서도 알고 싶다면?
      <span className={styles.highlight}>관심 기업 바로가기</span>
    </button>
  );
}
