import { themeClass } from "@/shared/styles/vars.css";
import * as styles from "./app.css";
import { Outlet } from "react-router-dom";
import { Header } from "@/layout/Header";

export default function App() {
  return (
    <div className={`${themeClass} ${styles.viewport}`}>
      <div className={styles.mobileFrame}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
