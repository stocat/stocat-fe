
import { ApiClient, Stock, Asset, UserSummary, AnalysisReport, MarketType } from "./types";
import { MOCK_STOCKS, MOCK_ASSETS, MOCK_ANALYSIS } from "./mock-data";

class MockApiClient implements ApiClient {
    private stocks: Stock[] = MOCK_STOCKS;

    async getUserSummary(): Promise<UserSummary> {
        return {
            name: "Jeong Gwonho",
            id: "user-123"
        };
    }

    async getRecommendedStocks(type: MarketType): Promise<Stock[]> {
        // Return Top 5 by type (simulated)
        return this.stocks.filter(s => s.type === type).slice(0, 5);
    }

    async getAllStocks(): Promise<Stock[]> {
        return this.stocks;
    }

    async getStocks(filter?: string): Promise<Stock[]> {
        if (!filter) return this.stocks;
        const lowerFilter = filter.toLowerCase();
        return this.stocks.filter(s =>
            s.name.toLowerCase().includes(lowerFilter) ||
            s.code.toLowerCase().includes(lowerFilter)
        );
    }

    async getStockDetail(id: string): Promise<Stock | undefined> {
        return this.stocks.find(s => s.id === id);
    }

    async getMyAssets(): Promise<Asset[]> {
        return MOCK_ASSETS;
    }

    async getAnalysisReport(): Promise<AnalysisReport> {
        return MOCK_ANALYSIS;
    }
}

import { realApi } from "./real-client";

// Toggle this or use env variable to switch
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true' || true; // Defaulting to true for now

export const api = USE_MOCK ? new MockApiClient() : realApi;
