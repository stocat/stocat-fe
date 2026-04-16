import { CharacterSnovyOpen } from "@/assets/icons/components";
import * as styles from "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.subHeading}>조금만 기다려주세요!</p>
        <p className={styles.mainHeading}>환전이 완료되는 중이에요 ..</p>
      </div>
      <CharacterSnovyOpen className={styles.character} />
    </div>
  );
}
