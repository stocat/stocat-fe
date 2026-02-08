import * as styles from "./Summary.css";

export default function Summary() {
  return (
    <div className={styles.container}>
      <section className={styles.title_container}>
        <h2 className={styles.title}>오늘의 주요 증권 소식 한 줄 요약</h2>
      </section>

      <section className={styles.content_container}>
        <p className={styles.content}>예시 글 입니다.</p>
      
        <span className={styles.more_button}>더 보기</span>
      </section>
    </div>
  );
}
