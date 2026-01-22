import * as styles from "./GreenPage.css";

export default function GreenPage() {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
        padding: "24px",
      }}
    >
      <div className={styles.box}>Primary / Normal</div>
      <div className={styles.box}>Hover 해보세요</div>
      <div className={styles.box}>Active (눌러보세요)</div>
    </div>
  );
}
