import { themeClass } from "@/shared/styles/vars.css";
import * as styles from "./app.css";
import { Outlet } from "react-router-dom";
import { Header } from "@/layout/Header";
import { BottomAppBar } from "@/layout/BottomAppBar";

export default function App() {
  return (
    <div className={`${themeClass} ${styles.viewport}`}>
      <div className={styles.mobileFrame}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
        <BottomAppBar />
      </div>
    </div>
  );
}
