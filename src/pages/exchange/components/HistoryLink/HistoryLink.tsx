import { VectorRight } from "@/assets/icons/components";
import * as styles from "./HistoryLink.css";

export default function HistoryLink() {
  return (
    <div className={styles.container}>
      <span className={styles.label}>🧾 환전이력 보기</span>
      <VectorRight width={20} height={20} />
    </div>
  );
}
