import type { NewsItem } from "../../StockDetail.types";
import * as styles from "./NewsSection.css";

interface NewsSectionProps {
  title: string;
  news: NewsItem[];
  showHelp?: boolean;
  showMore?: boolean;
  showPlaceholder?: boolean;
  onMoreClick?: () => void;
  onNewsClick?: (newsId: string) => void;
}

export default function NewsSection({
  title,
  news,
  showHelp = false,
  showMore = false,
  showPlaceholder = false,
  onMoreClick,
  onNewsClick,
}: NewsSectionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          {showHelp && (
            <span className={styles.helpIcon} title="도움말">
              ?
            </span>
          )}
        </div>
        {showMore && (
          <button type="button" className={styles.moreButton} onClick={onMoreClick}>
            더 보기
          </button>
        )}
      </div>

      {showPlaceholder && <div className={styles.placeholder} aria-hidden="true" />}

      <ul className={styles.newsList}>
        {news.map((item) => (
          <li
            key={item.id}
            className={item.isHighlighted ? styles.newsItemHighlighted : styles.newsItem}
            onClick={() => onNewsClick?.(item.id)}
          >
            <span
              className={
                item.isHighlighted ? styles.newsTitleHighlighted : styles.newsTitle
              }
            >
              {item.title}
            </span>
            <span className={styles.newsTimestamp}>{item.timestamp}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
