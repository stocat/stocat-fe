import { useNavigate } from "react-router-dom";
import * as styles from "./ExchangeBottomBar.css";

export default function ExchangeBottomBar() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.secondaryButton}>원화로 환전</button>
      <button
        className={styles.primaryButton}
        onClick={() => navigate("/exchange/buy")}
      >
        달러로 환전
      </button>
    </div>
  );
}
