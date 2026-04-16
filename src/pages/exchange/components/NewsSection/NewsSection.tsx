import * as styles from "./NewsSection.css";

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>도움되는 환율소식</span>
      <div className={styles.newsList}>
        {news.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <span className={styles.newsTitle}>{item.title}</span>
            <div className={styles.newsMeta}>
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
      <span className={styles.moreLink}>다른소식보기</span>
    </div>
  );
}
