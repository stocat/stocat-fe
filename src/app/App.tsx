import * as styles from "./app.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.viewport}>
      <div className={styles.mobileFrame}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
