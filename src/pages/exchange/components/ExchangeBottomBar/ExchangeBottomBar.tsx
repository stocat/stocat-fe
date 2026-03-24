import * as styles from "./ExchangeBottomBar.css";

export default function ExchangeBottomBar() {
  return (
    <div className={styles.container}>
      <button className={styles.secondaryButton}>원화로 환전</button>
      <button className={styles.primaryButton}>달러로 환전</button>
    </div>
  );
}
