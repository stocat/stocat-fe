import type { Stock, Tab, TabType } from "./TodaysPick.types";

export const TABS: Tab[] = [
  { key: "popularity", label: "인기" },
  { key: "tradingValue", label: "거래대금" },
  { key: "tradingVolume", label: "거래량" },
  { key: "rising", label: "급상승" },
  { key: "falling", label: "급하락" },
];

export const MOCK_STOCKS_BY_TAB: Record<TabType, Stock[]> = {
  popularity: [
    {
      id: "005930",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "삼성전자",
      price: 119100,
      changePercent: 1.8,
      isFavorite: false,
    },
    {
      id: "000660",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "SK하이닉스",
      price: 178500,
      changePercent: 2.3,
      isFavorite: false,
    },
    {
      id: "035420",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "NAVER",
      price: 215000,
      changePercent: -0.5,
      isFavorite: true,
    },
    {
      id: "035720",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "카카오",
      price: 52300,
      changePercent: 1.2,
      isFavorite: false,
    },
    {
      id: "051910",
      imageUrl: "",
      categories: [
        { label: "소재", type: "sector" },
        { label: "화학", type: "industry" },
      ],
      name: "LG화학",
      price: 381000,
      changePercent: -1.5,
      isFavorite: false,
    },
  ],
  tradingValue: [
    {
      id: "051910",
      imageUrl: "",
      categories: [
        { label: "소재", type: "sector" },
        { label: "화학", type: "industry" },
      ],
      name: "LG화학",
      price: 381000,
      changePercent: -1.5,
      isFavorite: false,
    },
    {
      id: "035420",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "NAVER",
      price: 215000,
      changePercent: -0.5,
      isFavorite: true,
    },
    {
      id: "000660",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "SK하이닉스",
      price: 178500,
      changePercent: 2.3,
      isFavorite: false,
    },
    {
      id: "005930",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "삼성전자",
      price: 119100,
      changePercent: 1.8,
      isFavorite: false,
    },
    {
      id: "035720",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "카카오",
      price: 52300,
      changePercent: 1.2,
      isFavorite: false,
    },
  ],
  tradingVolume: [
    {
      id: "035720",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "카카오",
      price: 52300,
      changePercent: 1.2,
      isFavorite: false,
    },
    {
      id: "005930",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "삼성전자",
      price: 119100,
      changePercent: 1.8,
      isFavorite: false,
    },
    {
      id: "000660",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "SK하이닉스",
      price: 178500,
      changePercent: 2.3,
      isFavorite: false,
    },
    {
      id: "035420",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "NAVER",
      price: 215000,
      changePercent: -0.5,
      isFavorite: true,
    },
    {
      id: "051910",
      imageUrl: "",
      categories: [
        { label: "소재", type: "sector" },
        { label: "화학", type: "industry" },
      ],
      name: "LG화학",
      price: 381000,
      changePercent: -1.5,
      isFavorite: false,
    },
  ],
  rising: [
    {
      id: "000660",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "SK하이닉스",
      price: 178500,
      changePercent: 2.3,
      isFavorite: false,
    },
    {
      id: "005930",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "하드웨어", type: "industry" },
      ],
      name: "삼성전자",
      price: 119100,
      changePercent: 1.8,
      isFavorite: false,
    },
    {
      id: "035720",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "카카오",
      price: 52300,
      changePercent: 1.2,
      isFavorite: false,
    },
  ],
  falling: [
    {
      id: "051910",
      imageUrl: "",
      categories: [
        { label: "소재", type: "sector" },
        { label: "화학", type: "industry" },
      ],
      name: "LG화학",
      price: 381000,
      changePercent: -1.5,
      isFavorite: false,
    },
    {
      id: "035420",
      imageUrl: "",
      categories: [
        { label: "정보기술(IT)", type: "sector" },
        { label: "소프트웨어", type: "industry" },
      ],
      name: "NAVER",
      price: 215000,
      changePercent: -0.5,
      isFavorite: true,
    },
  ],
};
