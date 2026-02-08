
import { Stock, Asset, UserSummary, AnalysisReport, News } from "./types";

export const MOCK_STOCKS: Stock[] = [
    // Korea (5 items)
    {
        id: '1', name: '삼성전자', code: '005930', price: '72,400', rawPrice: 72400, change: '+1.5%', isUp: true, type: 'korea', currency: '₩',
        volume: '12,345,678', high: '72,800', low: '71,900', marketCap: '480조'
    },
    {
        id: '2', name: 'SK하이닉스', code: '000660', price: '132,000', rawPrice: 132000, change: '-0.8%', isUp: false, type: 'korea', currency: '₩',
        volume: '2,345,678', high: '133,500', low: '131,000', marketCap: '96조'
    },
    {
        id: 'k3', name: 'LG에너지솔루션', code: '373220', price: '372,500', rawPrice: 372500, change: '-0.7%', isUp: false, type: 'korea', currency: '₩',
        volume: '150,000', high: '375,000', low: '370,000', marketCap: '87조'
    },
    {
        id: 'k4', name: '현대차', code: '005380', price: '245,000', rawPrice: 245000, change: '+2.1%', isUp: true, type: 'korea', currency: '₩',
        volume: '500,000', high: '248,000', low: '242,000', marketCap: '51조'
    },
    {
        id: 'k5', name: 'POSCO홀딩스', code: '005490', price: '420,000', rawPrice: 420000, change: '+0.5%', isUp: true, type: 'korea', currency: '₩',
        volume: '300,000', high: '425,000', low: '418,000', marketCap: '35조'
    },

    // US (5 items)
    {
        id: '3', name: 'Apple', code: 'AAPL', price: '185.40', rawPrice: 185.40, change: '+0.5%', isUp: true, type: 'us', currency: '$',
        volume: '45,678,901', high: '186.00', low: '184.50', marketCap: '3000B'
    },
    {
        id: '4', name: 'Tesla', code: 'TSLA', price: '240.50', rawPrice: 240.50, change: '+2.1%', isUp: true, type: 'us', currency: '$',
        volume: '98,765,432', high: '245.00', low: '238.00', marketCap: '800B'
    },
    {
        id: 'u3', name: 'NVIDIA', code: 'NVDA', price: '680.20', rawPrice: 680.20, change: '+3.5%', isUp: true, type: 'us', currency: '$',
        volume: '30,000,000', high: '685.00', low: '670.00', marketCap: '1700B'
    },
    {
        id: 'u4', name: 'Microsoft', code: 'MSFT', price: '405.00', rawPrice: 405.00, change: '+0.8%', isUp: true, type: 'us', currency: '$',
        volume: '20,000,000', high: '408.00', low: '402.00', marketCap: '3000B'
    },
    {
        id: 'u5', name: 'Amazon', code: 'AMZN', price: '155.30', rawPrice: 155.30, change: '-0.2%', isUp: false, type: 'us', currency: '$',
        volume: '35,000,000', high: '158.00', low: '154.00', marketCap: '1600B'
    },

    // Coin (5 items)
    {
        id: '5', name: '비트코인', code: 'BTC', price: '52,000,000', rawPrice: 52000000, change: '-1.2%', isUp: false, type: 'coin', currency: '₩',
        volume: '1,234', high: '53,000,000', low: '51,500,000', marketCap: '1000조'
    },
    {
        id: '6', name: '이더리움', code: 'ETH', price: '2,800,000', rawPrice: 2800000, change: '+0.3%', isUp: true, type: 'coin', currency: '₩',
        volume: '45,678', high: '2,850,000', low: '2,780,000', marketCap: '300조'
    },
    {
        id: 'c3', name: '리플', code: 'XRP', price: '750', rawPrice: 750, change: '+1.5%', isUp: true, type: 'coin', currency: '₩',
        volume: '100,000,000', high: '760', low: '740', marketCap: '40조'
    },
    {
        id: 'c4', name: '솔라나', code: 'SOL', price: '130,000', rawPrice: 130000, change: '+5.4%', isUp: true, type: 'coin', currency: '₩',
        volume: '500,000', high: '135,000', low: '125,000', marketCap: '60조'
    },
    {
        id: 'c5', name: '노지코인', code: 'DOGE', price: '120', rawPrice: 120, change: '-2.5%', isUp: false, type: 'coin', currency: '₩',
        volume: '200,000,000', high: '125', low: '118', marketCap: '20조'
    },
];

export const MOCK_ASSETS: Asset[] = [
    {
        stock: MOCK_STOCKS[0], // Samsung
        amount: 10,
        purchasePrice: 70000
    },
    {
        stock: MOCK_STOCKS[5], // Apple (Index 5 -> Apple in new array is Index 5? No, Apple is index 5)
        amount: 5,
        purchasePrice: 180
    }
];

export const MOCK_USER_SUMMARY: UserSummary = {
    name: "강혜린",
    id: "user-123"
};

export const MOCK_ANALYSIS: AnalysisReport = {
    style: "성장 지향형",
    styleDescription: "안정적인 대형주 위주의 포트폴리오를 구성하고 계시네요.",
    insights: [
        { title: "기술주 비중", value: "60%", trend: "up" },
        { title: "수익률", value: "+12.5%", trend: "up" }
    ],
    feedback: [
        { text: "채권 비중 확대 고려", type: "suggestion" },
        { text: "현금 보유량 적정", type: "success" }
    ]
};

export const MOCK_NEWS: News[] = [
    { id: '1', time: '09:30', title: '삼성전자, AI 반도체 점유율 확대 기대감에 상승', press: '한국경제' },
    { id: '2', time: '09:15', title: '테슬라, 사이버트럭 인도량 증가 소식', press: '블룸버그' },
    { id: '3', time: '08:50', title: '비트코인 1억 돌파 임박... 가상자산 시장 후끈', press: '코인데스크' },
    { id: '4', time: '08:30', title: '미 연준, 금리 인하 시기 조율 중', press: 'WSJ' },
    { id: '5', time: '08:00', title: '2차전지 관련주 일제히 반등 성공', press: '매일경제' },
];
