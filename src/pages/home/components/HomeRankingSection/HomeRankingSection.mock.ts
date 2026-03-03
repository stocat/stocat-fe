export interface RankingItem {
  rank: number;
  nickname: string;
  changeAmount: number;
}

export const MOCK_RANKINGS: RankingItem[] = [
  { rank: 1, nickname: "감자전맛집", changeAmount: 535000000 },
  { rank: 2, nickname: "도토리묵", changeAmount: 482000000 },
  { rank: 3, nickname: "나물비빔밥", changeAmount: 391000000 },
  { rank: 4, nickname: "춘천닭갈비", changeAmount: 391000000 },
];

export const MOCK_MY_RANKING: RankingItem = {
  rank: 938,
  nickname: "아임도넛",
  changeAmount: 1200000,
};
