import {
  CharacterSnovy,
  MedalFirst,
  MedalSecond,
  MedalThird,
} from "@/assets/icons/components";
import { ChangeRate } from "@/shared/components";
import * as styles from "./RankingContent.css";

interface RankingContentProps {
  rank: number;
  nickname: string;
  changeAmount: number;
  isCurrentUser?: boolean;
}

const MEDAL_ICONS = {
  1: MedalFirst,
  2: MedalSecond,
  3: MedalThird,
} as const;

function formatAmount(amount: number): string {
  const sign = amount >= 0 ? "+" : "";
  return `${sign}${amount.toLocaleString("ko-KR")}`;
}

export function RankingContent({
  rank,
  nickname,
  changeAmount,
  isCurrentUser = false,
}: RankingContentProps) {
  const MedalIcon = MEDAL_ICONS[rank as keyof typeof MEDAL_ICONS];

  const containerClass = [
    styles.container,
    isCurrentUser && styles.currentUserContainer,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      <div className={styles.titleContainer}>
        <div className={styles.iconWrapper}>
          {isCurrentUser ? <CharacterSnovy /> : MedalIcon ? <MedalIcon /> : null}
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.rank}>{rank}위</div>
          <div className={styles.title}>{nickname}</div>
        </div>
      </div>
      <ChangeRate value={changeAmount} typography="body3">
        {formatAmount(changeAmount)}
      </ChangeRate>
    </div>
  );
}
