import { MOCK_MY_RANKING, MOCK_RANKINGS } from "../HomeRankingSection.mock";
import { RankingContent } from "../RankingContent/RankingContent";
import * as styles from "./RankingList.css";

export const RankingList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollableList}>
        {MOCK_RANKINGS.map((item) => (
          <RankingContent
            key={item.rank}
            rank={item.rank}
            nickname={item.nickname}
            changeAmount={item.changeAmount}
          />
        ))}
      </div>
      <RankingContent
        rank={MOCK_MY_RANKING.rank}
        nickname={MOCK_MY_RANKING.nickname}
        changeAmount={MOCK_MY_RANKING.changeAmount}
        isCurrentUser
      />
    </div>
  );
};
