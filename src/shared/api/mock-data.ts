
import { Stock, Asset, UserSummary, AnalysisReport } from "./types";

export const MOCK_STOCKS: Stock[] = [
    {
        id: '1', name: '삼성전자', code: '005930', price: '72,400', rawPrice: 72400, change: '+1.5%', isUp: true, type: 'korea', currency: '₩',
        volume: '12,345,678', high: '72,800', low: '71,900', marketCap: '480조'
    },
    {
        id: '2', name: 'SK하이닉스', code: '000660', price: '132,000', rawPrice: 132000, change: '-0.8%', isUp: false, type: 'korea', currency: '₩',
        volume: '2,345,678', high: '133,500', low: '131,000', marketCap: '96조'
    },
    {
        id: '3', name: 'Apple', code: 'AAPL', price: '185.40', rawPrice: 185.40, change: '+0.5%', isUp: true, type: 'us', currency: '$',
        volume: '45,678,901', high: '186.00', low: '184.50', marketCap: '3000B'
    },
    {
        id: '4', name: 'Tesla', code: 'TSLA', price: '240.50', rawPrice: 240.50, change: '+2.1%', isUp: true, type: 'us', currency: '$',
        volume: '98,765,432', high: '245.00', low: '238.00', marketCap: '800B'
    },
    {
        id: '5', name: 'Bitcoin', code: 'KRW-BTC', price: '52,000,000', rawPrice: 52000000, change: '-1.2%', isUp: false, type: 'coin', currency: '₩',
        volume: '1,234', high: '53,000,000', low: '51,500,000', marketCap: '1000조'
    },
    {
        id: '6', name: 'Ethereum', code: 'KRW-ETH', price: '2,800,000', rawPrice: 2800000, change: '+0.3%', isUp: true, type: 'coin', currency: '₩',
        volume: '45,678', high: '2,850,000', low: '2,780,000', marketCap: '300조'
    },
];

export const MOCK_ASSETS: Asset[] = [
    {
        stock: MOCK_STOCKS[0], // Samsung
        amount: 10,
        purchasePrice: 70000
    },
    {
        stock: MOCK_STOCKS[2], // Apple
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
