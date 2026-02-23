import * as styles from "./Header.css";
import { useIndexInfo } from "./useIndexInfo";

export default function Header() {
  const { data: indexInfo } = useIndexInfo();
  const changeColor = indexInfo?.isPositive ? "#F46163" : "#4285F4";

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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9984 21.0004L16.6484 16.6504" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.iconButton} aria-label="Bell">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9C6 16 3 18 3 18H21C21 18 18 16 18 9Z" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.7295 20C13.5537 20.3031 13.3014 20.5547 12.9978 20.7295C12.6941 20.9044 12.3499 20.9965 11.9995 20.9965C11.6492 20.9965 11.3049 20.9044 11.0013 20.7295C10.6977 20.5547 10.4453 20.3031 10.2695 20" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="17" cy="6" r="4" fill="#F46163"/>
          </svg>
        </button>
        <button className={styles.iconButton} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
