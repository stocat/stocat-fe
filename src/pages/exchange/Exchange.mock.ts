export const MOCK_EXCHANGE_WALLET = {
  timestamp: "20:42",
  won: { label: "원화", value: "505,000원" },
  dollar: { label: "달러", value: "$100" },
};

export const MOCK_EXCHANGE_RATE = {
  rate: 1468.3,
  change: -10.5,
  changePercent: -3.7,
  date: "2월 13일 22:44 기준",
};

export const MOCK_RATE_CARDS = {
  dollarToWon: {
    from: "달러",
    to: "원화",
    rate: "1,468.42원",
  },
  wonToDollar: {
    from: "원화",
    to: "달러",
    rate: "1,469.93원",
  },
};

export const MOCK_NEWS = [
  {
    id: 1,
    title: "살아난 위험신호 심리... 달러 원 환율 12.2원 내린 1464.0원 출발",
    source: "원뉴스",
    time: "5시간 전",
  },
  {
    id: 2,
    title: '\u201C비트코인 급반등은 유동성 견조하단 심호..\u201D',
    source: "한국경제",
    time: "6시간 전",
  },
  {
    id: 3,
    title: "대우건설, 417만주 자사주 소각.. LH,전세임대 3.8만 가구 공급",
    source: "서울경제",
    time: "6시간 전",
  },
];

export const MOCK_ANALYSIS = [
  {
    id: 1,
    description:
      "외국인 투자자들이 한국 주식 시장에서 자금을 회수하면서 달러 가치가 상대적으로 높아졌어요",
  },
  {
    id: 2,
    description:
      "미국과 이란 간 전쟁 우려가 완화되면서 글로벌 위험자산 선호 심리가 살아났어요",
  },
];

export const MOCK_COMMUNITY = [
  {
    id: 1,
    nickname: "한입만두",
    content: "주식도 오르고 날씨도 좋고\n오늘 시작이 좋다",
    time: "1분 전",
  },
];
