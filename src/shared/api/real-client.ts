
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

    async getNews(): Promise<import("./types").News[]> {
        return this.fetch<import("./types").News[]>('/news');
    }

    async buy(stockId: string, amount: number, price: number): Promise<boolean> {
        return this.fetch<boolean>('/buy', {
            method: 'POST',
            body: JSON.stringify({ stockId, amount, price })
        });
    }

    async sell(stockId: string, amount: number, price: number): Promise<boolean> {
        return this.fetch<boolean>('/sell', {
            method: 'POST',
            body: JSON.stringify({ stockId, amount, price })
        });
    }

    // Auth
    async signup(req: import("./types").SignupRequest): Promise<void> {
        return this.fetch<void>('/auth/signup', {
            method: 'POST',
            body: JSON.stringify(req)
        });
    }

    async login(req: import("./types").LoginRequest): Promise<import("./types").AuthResponse> {
        return this.fetch<import("./types").AuthResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(req)
        });
    }

    async getMe(): Promise<import("./types").UserSummary> {
        return this.fetch<import("./types").UserSummary>('/auth/summary');
    }
}

export const realApi = new RealApiClient();
