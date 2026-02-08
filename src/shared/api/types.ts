export interface Stock {
    id: string;
    name: string;
    code: string;
    // Dynamic fields (Optional, populated via Socket)
    price?: string;
    rawPrice?: number;
    change?: string;
    isUp?: boolean;

    type?: MarketType;
    currency?: string;
    // Detailed fields
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
    name: string;
    id: string;
    // Removed totalAsset, totalAssetChange, isUp as they are derived on FE
}

export type MarketType = 'korea' | 'us' | 'coin';

export interface AnalysisReport {
    style: string;
    styleDescription: string;
    insights: { title: string; value: string; trend: string }[];
    feedback: { text: string; type: string }[];
}

export interface ApiClient {
    getUserSummary(): Promise<UserSummary>;
    getRecommendedStocks(type: MarketType): Promise<Stock[]>;
    getAllStocks(): Promise<Stock[]>;
    getStocks(filter?: string): Promise<Stock[]>;
    getStockDetail(id: string): Promise<Stock | undefined>;
    getMyAssets(): Promise<Asset[]>;
    getAnalysisReport(): Promise<AnalysisReport>;
}

export interface TradeInfo {
    code: string;
    side: 'BUY' | 'SELL';
    qty: number;
    price: number;
    priceCurrency: string;
    feeAmount: number;
    feeCurrency: string;
    occurredAt: string;
    change: 'RISE' | 'EVEN' | 'FALL';
    change_price: number;
}
