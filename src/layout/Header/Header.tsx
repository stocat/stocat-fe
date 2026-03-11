import { useLocation, useNavigate } from "react-router-dom";
import { VectorLeft } from "@/assets/icons/components";
import * as styles from "./Header.css";
import { useIndexInfo } from "./useIndexInfo";
import { useTrade } from "@/app/TradeContext";

function StockDetailHeader() {
  const navigate = useNavigate();
  const { mode, close } = useTrade();

  return (
    <header className={styles.stockDetailHeader}>
      <button
        className={styles.iconButton}
        aria-label="뒤로가기"
        onClick={() => (mode ? close() : navigate(-1))}
      >
        <VectorLeft width={24} height={24} />
      </button>
      <div className={styles.stockDetailIconGroup}>
        <button className={styles.iconButton} aria-label="관심 종목 추가">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12078 20.84 4.60999Z"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.iconButton} aria-label="알림">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9C6 16 3 18 3 18H21C21 18 18 16 18 9Z"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7295 20C13.5537 20.3031 13.3014 20.5547 12.9978 20.7295C12.6941 20.9044 12.3499 20.9965 11.9995 20.9965C11.6492 20.9965 11.3049 20.9044 11.0013 20.7295C10.6977 20.5547 10.4453 20.3031 10.2695 20"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="17" cy="6" r="4" fill="#F46163" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default function Header() {
  const location = useLocation();
  const isStockDetailPage = location.pathname.startsWith("/stock/");
  const { data: indexInfo } = useIndexInfo();
  const changeColor = indexInfo?.isPositive ? "#F46163" : "#4285F4";

  if (isStockDetailPage) {
    return <StockDetailHeader />;
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <h1 className={styles.logo}>STOCAT</h1>
        {indexInfo && (
          <div className={styles.indexInfo}>
            <span className={styles.indexName}>{indexInfo.name}</span>
            <span className={styles.indexValue} style={{ color: changeColor }}>
              {indexInfo.value}
            </span>
            <span className={styles.indexChange} style={{ color: changeColor }}>
              {indexInfo.change}
            </span>
          </div>
        )}
      </div>
      <div className={styles.iconGroup}>
        <button className={styles.iconButton} aria-label="Search">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9984 21.0004L16.6484 16.6504"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.iconButton} aria-label="Bell">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9C6 16 3 18 3 18H21C21 18 18 16 18 9Z"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7295 20C13.5537 20.3031 13.3014 20.5547 12.9978 20.7295C12.6941 20.9044 12.3499 20.9965 11.9995 20.9965C11.6492 20.9965 11.3049 20.9044 11.0013 20.7295C10.6977 20.5547 10.4453 20.3031 10.2695 20"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="17" cy="6" r="4" fill="#F46163" />
          </svg>
        </button>
        <button className={styles.iconButton} aria-label="Menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
