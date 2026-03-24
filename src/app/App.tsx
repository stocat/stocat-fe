import { Suspense } from "react";
import { themeClass } from "@/shared/styles/vars.css";
import * as styles from "./app.css";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/layout/Header";
import { BottomAppBar } from "@/layout/BottomAppBar";
import { TradeProvider } from "./TradeContext";

function AppLayout() {
  const location = useLocation();
  const isExchangePage =
    location.pathname === "/exchange" ||
    location.pathname.startsWith("/exchange/");

  return (
    <div className={styles.mobileFrame}>
      <Header />
      <div
        className={
          isExchangePage ? styles.contentNoPadding : styles.content
        }
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <BottomAppBar />
    </div>
  );
}

export default function App() {
  return (
    <TradeProvider>
      <div className={`${themeClass} ${styles.viewport}`}>
        <AppLayout />
      </div>
    </TradeProvider>
  );
}
