
import { MOCK_STOCKS } from "./mock-data";
import { TradeInfo } from "./types";

// Interface for any Real-time Client
export interface RealTimeClient {
    connect(): void;
    disconnect(): void;
    subscribe(topic: string, callback: (data: any) => void): void;
    unsubscribe(topic: string, callback: (data: any) => void): void;
    addStatusListener(callback: (isConnected: boolean) => void): void;
    removeStatusListener(callback: (isConnected: boolean) => void): void;
}

type Listener = (data: any) => void;
type StatusListener = (isConnected: boolean) => void;

interface StockState {
    price: number;
    prevClose: number;
}

export class MockSocketService implements RealTimeClient {
    private listeners: Map<string, Set<Listener>> = new Map();
    private statusListeners: Set<StatusListener> = new Set();
    private intervalId: NodeJS.Timeout | null = null;
    private isConnected = false;

    // State tracking
    private stockStates: Map<string, StockState> = new Map();

    constructor() {
        // Initialize state
        MOCK_STOCKS.forEach(stock => {
            // Safely handle optional fields, defaulting to 0 or '0%' for calculation
            const changeStr = stock.change || '0%';
            const rate = parseFloat(changeStr.replace('%', '').replace('+', ''));
            // rawPrice is optional in interface, but required for mock simulation. Default to 0.
            const price = stock.rawPrice ?? 0;

            const prevClose = price / (1 + rate / 100);

            this.stockStates.set(stock.id, {
                price: price,
                prevClose: Math.floor(prevClose)
            });
        });
    }

    connect() {
        if (this.isConnected) {
            // Immediately notify if already connected
            this.notifyStatus(true);
            return;
        }

        console.log('[MockSocket] Connecting...');
        // Simulate network delay
        setTimeout(() => {
            this.isConnected = true;
            console.log('[MockSocket] Connected');
            this.notifyStatus(true);

            this.intervalId = setInterval(() => {
                this.simulateMarketUpdates();
            }, 2000);
        }, 1000); // 1 second delay
    }

    disconnect() {
        this.isConnected = false;
        this.notifyStatus(false);
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.listeners.clear();
        console.log('[MockSocket] Disconnected');
    }

    addStatusListener(callback: StatusListener) {
        this.statusListeners.add(callback);
        // Immediately notify current status
        callback(this.isConnected);
    }

    removeStatusListener(callback: StatusListener) {
        this.statusListeners.delete(callback);
    }

    private notifyStatus(status: boolean) {
        this.statusListeners.forEach(cb => cb(status));
    }

    subscribe(topic: string, callback: Listener) {
        if (!this.listeners.has(topic)) {
            this.listeners.set(topic, new Set());
        }
        this.listeners.get(topic)!.add(callback);
    }

    unsubscribe(topic: string, callback: Listener) {
        const topicListeners = this.listeners.get(topic);
        if (topicListeners) {
            topicListeners.delete(callback);
            if (topicListeners.size === 0) {
                this.listeners.delete(topic);
            }
        }
    }

    private simulateMarketUpdates() {
        this.listeners.forEach((_, topic) => {
            if (topic.startsWith('stock:')) {
                const stockId = topic.split(':')[1];
                this.emitStockUpdate(stockId, topic);
            }
        });
    }

    private emitStockUpdate(stockId: string, topic: string) {
        const state = this.stockStates.get(stockId);
        const staticData = MOCK_STOCKS.find(s => s.id === stockId);

        if (!state || !staticData) return;

        const percentChange = (Math.random() * 0.4 - 0.2);
        const newPrice = Math.floor(state.price * (1 + percentChange / 100));

        state.price = newPrice;
        this.stockStates.set(stockId, state);

        const diff = newPrice - state.prevClose;
        const change: 'RISE' | 'FALL' | 'EVEN' = diff > 0 ? 'RISE' : diff < 0 ? 'FALL' : 'EVEN';
        const changePrice = Math.abs(diff);

        const payload: TradeInfo = {
            code: staticData.code,
            side: percentChange > 0 ? 'BUY' : 'SELL',
            qty: Math.random() * 10,
            price: newPrice,
            priceCurrency: staticData.currency === '$' ? 'USD' : 'KRW',
            feeAmount: 0,
            feeCurrency: staticData.currency === '$' ? 'USD' : 'KRW',
            occurredAt: new Date().toISOString(),
            change: change,
            change_price: changePrice
        };

        this.notify(topic, payload);
    }

    private notify(topic: string, data: any) {
        const topicListeners = this.listeners.get(topic);
        if (topicListeners) {
            topicListeners.forEach(callback => callback(data));
        }
    }
}

import { realSocketApi } from "./real-socket";

// Toggle this or use env variable to switch
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true' || true;

export const realtimeApi = USE_MOCK ? new MockSocketService() : realSocketApi;
