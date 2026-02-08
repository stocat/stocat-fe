
import { ApiClient, Stock, Asset, UserSummary, AnalysisReport, MarketType } from "./types";

const BASE_URL = 'http://localhost:8080/api';

// Standard Backend Response Wrapper
interface ApiResponse<T> {
    success: boolean;
    data: T;
    code: number;
    message: string;
    timestamp: string;
}

class RealApiClient implements ApiClient {
    private getHeaders(): HeadersInit {
        const token = localStorage.getItem('auth_token');
        return {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        };
    }

    private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...this.getHeaders(),
                ...options?.headers
            }
        });

        // Network level error
        if (!response.ok) {
            throw new Error(`API Network Error: ${response.status} ${response.statusText}`);
        }

        const body: ApiResponse<T> = await response.json();

        // Business level error
        if (!body.success) {
            throw new Error(body.message || `API Error Code: ${body.code}`);
        }

        return body.data;
    }

    async getUserSummary(): Promise<UserSummary> {
        return this.fetch<UserSummary>('/user/summary');
    }

    async getRecommendedStocks(type: MarketType): Promise<Stock[]> {
        return this.fetch<Stock[]>(`/stocks?type=${type}&limit=5`);
    }

    async getAllStocks(): Promise<Stock[]> {
        return this.fetch<Stock[]>('/stocks');
    }

    async getStocks(filter?: string): Promise<Stock[]> {
        const query = filter ? `?search=${encodeURIComponent(filter)}` : '';
        return this.fetch<Stock[]>(`/stocks${query}`);
    }

    async getStockDetail(id: string): Promise<Stock | undefined> {
        try {
            return await this.fetch<Stock>(`/stocks/${id}`);
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }

    async getMyAssets(): Promise<Asset[]> {
        return this.fetch<Asset[]>('/assets');
    }

    async getAnalysisReport(): Promise<AnalysisReport> {
        return this.fetch<AnalysisReport>('/analysis');
    }
}

export const realApi = new RealApiClient();
