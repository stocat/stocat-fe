import { themeClass } from "@/shared/styles/vars.css";
import * as styles from "./app.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className={`${themeClass} ${styles.viewport}`}>
      <div className={styles.mobileFrame}>
        <Outlet />
      </div>
    </div>
  );
}
