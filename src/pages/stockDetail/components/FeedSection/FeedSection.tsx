import * as styles from "./FeedSection.css";

interface FeedPost {
  id: string;
  nickname: string;
  text: string;
}

const mockPosts: FeedPost[] = [
  {
    id: "f1",
    nickname: "투자고수",
    text: "반도체 사이클 바닥 찍고 올라가는 중인 것 같아요",
  },
  {
    id: "f2",
    nickname: "주식새싹",
    text: "HBM 수요가 계속 늘어날 것 같아서 장기 보유 중이에요",
  },
  {
    id: "f3",
    nickname: "코스피왕",
    text: "외국인 매수세가 다시 들어오고 있네요 긍정적!",
  },
];

interface FeedSectionProps {
  stockName: string;
}

export default function FeedSection({
  stockName: _stockName,
}: FeedSectionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>한줄 커뮤니티</h2>
      </div>
      <ul className={styles.postList}>
        {mockPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <div className={styles.avatar} aria-hidden="true" />
            <div className={styles.postContent}>
              <span className={styles.nickname}>{post.nickname}</span>
              <p className={styles.postText}>{post.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.moreButton}>
        의견더보기
      </button>
    </section>
  );
}
