import * as styles from "./ExpiryBanner.css";

export default function ExpiryBanner() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        투자 종목 소멸까지 24시간 43분 37초 남았어요!
      </span>
    </div>
  );
}
