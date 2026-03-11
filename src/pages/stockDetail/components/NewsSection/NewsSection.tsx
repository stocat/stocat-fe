import { useState } from "react";
import type { NewsItem } from "../../StockDetail.types";
import * as styles from "./NewsSection.css";

interface NewsSectionProps {
  industryNews: NewsItem[];
  companyNews: NewsItem[];
  onNewsClick?: (newsId: string) => void;
}

type NewsTab = "industry" | "company";

export default function NewsSection({
  industryNews,
  companyNews,
  onNewsClick,
}: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState<NewsTab>("industry");
  const news = activeTab === "industry" ? industryNews : companyNews;

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>소식 들어보세요</h2>
      <div className={styles.tabRow}>
        <button
          type="button"
          className={activeTab === "industry" ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab("industry")}
        >
          산업뉴스
        </button>
        <button
          type="button"
          className={activeTab === "company" ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab("company")}
        >
          기업뉴스
        </button>
      </div>

      <ul className={styles.newsList}>
        {news.map((item) => (
          <li
            key={item.id}
            className={
              item.isHighlighted ? styles.newsItemHighlighted : styles.newsItem
            }
            onClick={() => onNewsClick?.(item.id)}
          >
            <span
              className={
                item.isHighlighted
                  ? styles.newsTitleHighlighted
                  : styles.newsTitle
              }
            >
              {item.title}
            </span>
            <span className={styles.newsTimestamp}>{item.timestamp}</span>
          </li>
        ))}
      </ul>

      <button type="button" className={styles.moreButton}>
        다른소식보기
      </button>
    </section>
  );
}
