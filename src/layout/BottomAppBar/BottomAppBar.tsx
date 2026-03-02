import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart07,
  HomeLine,
  NotificationText,
  PieChart03,
} from "@/assets/icons/components";
import * as styles from "./BottomAppBar.css";

const navItems = [
  { path: "/", label: "홈", Icon: HomeLine },
  { path: "/market", label: "시장", Icon: BarChart07 },
  { path: "/portfolio", label: "포트폴리오", Icon: PieChart03 },
  { path: "/feed", label: "피드", Icon: NotificationText },
];

function NavigationBar() {
  return (
    <nav className={styles.bottomAppBar}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
          }
        >
          <item.Icon width={24} height={24} />
          <span className={styles.navLabel}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

interface TradeBarProps {
  onSell?: () => void;
  onBuy?: () => void;
}

function TradeBar({ onSell, onBuy }: TradeBarProps) {
  return (
    <div className={styles.tradeBar}>
      <button type="button" className={styles.sellButton} onClick={onSell}>
        판매하기
      </button>
      <button type="button" className={styles.buyButton} onClick={onBuy}>
        구매하기
      </button>
    </div>
  );
}

export default function BottomAppBar() {
  const location = useLocation();
  const isStockDetailPage = location.pathname.startsWith("/stock/");

  if (isStockDetailPage) {
    return <TradeBar />;
  }

  return <NavigationBar />;
}
