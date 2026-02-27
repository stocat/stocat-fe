import * as styles from "./HomeBanner.css";

export default function HomeBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.textArea}>
        <p className={styles.label}>튜토리얼</p>
        <p className={styles.title}>
          주식투자,
          <br />
          시작부터 함께해요
        </p>
      </div>
      <div className={styles.circleTopRight} />
      <div className={styles.circleBottomLeft} />
      <div className={styles.circleBottomRight} />
    </section>
  );
}
