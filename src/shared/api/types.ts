
export type MarketType = 'korea' | 'us' | 'coin';

export interface Stock {
    id: string;
    name: string;
    code: string;
    price: string;
    rawPrice?: number;
    change: string;
    isUp: boolean;
    type: MarketType;
    currency: string;

    // Details
    volume?: string;
    high?: string;
    low?: string;
    marketCap?: string;
}

export interface Asset {
    stock: Stock;
    amount: number;
    purchasePrice: number;
}

export interface UserSummary {
    id: number | string;
    email: string;
    nickname: string;
}

export interface AnalysisReport {
    style: string;
    styleDescription: string;
    insights: { title: string; value: string; trend: 'up' | 'down' }[];
    feedback: { text: string; type: string }[];
}

export interface News {
    id: string;
    time: string;
    title: string;
    press: string;
}

// Auth Types
export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    email: string;
    nickname: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ApiClient {
    // Auth
    signup(req: SignupRequest): Promise<void>;
    login(req: LoginRequest): Promise<AuthResponse>;
    getMe(): Promise<UserSummary>;

    // Domain
    getRecommendedStocks(type: MarketType): Promise<Stock[]>;
    getAllStocks(): Promise<Stock[]>;
    getStocks(filter?: string): Promise<Stock[]>;
    getStockDetail(id: string): Promise<Stock | undefined>;
    getMyAssets(): Promise<Asset[]>;
    getAnalysisReport(): Promise<AnalysisReport>;
    getNews(): Promise<News[]>;
    buy(stockId: string, amount: number, price: number): Promise<boolean>;
    sell(stockId: string, amount: number, price: number): Promise<boolean>;
}

export interface TradeInfo {
    code: string;
    side: string;        // "BUY" or "SELL"
    price: number;
    change: string;      // "RISE", "FALL", "EVEN"
    change_price: number;
    qty: number;         // Execution quantity
    trade_volume: number;
    acc_trade_volume: number;
    timestamp: number;
}
