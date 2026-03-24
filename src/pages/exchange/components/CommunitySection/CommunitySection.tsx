import { VectorRight } from "@/assets/icons/components";
import * as styles from "./CommunitySection.css";

interface CommunityItem {
  id: number;
  nickname: string;
  content: string;
  time: string;
}

interface CommunitySectionProps {
  items: CommunityItem[];
}

export default function CommunitySection({ items }: CommunitySectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>한줄 커뮤니티</span>
        <VectorRight width={24} height={24} />
      </div>
      <div className={styles.contentCard}>
        {items.map((item) => (
          <div key={item.id} className={styles.commentItem}>
            <div className={styles.avatar} />
            <div className={styles.commentBody}>
              <span className={styles.nickname}>{item.nickname}</span>
              <span className={styles.content}>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.indicatorRow} />
    </div>
  );
}
