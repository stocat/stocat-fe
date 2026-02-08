
import { useEffect, useState } from 'react';
import { realtimeApi } from '@/shared/api/realtime';
import { TradeInfo, Asset } from '@/shared/api/types';

export const useRealTimePrice = (stockId: string, initialPrice?: string | number, initialChange?: string) => {
    // Helper to parse price input
    const parsePrice = (p?: string | number) => {
        if (!p) return 0;
        if (typeof p === 'number') return p;
        return parseFloat(p.toString().replace(/[^0-9.-]/g, ''));
    };

    const [currentPrice, setCurrentPrice] = useState<number>(parsePrice(initialPrice));
    const [currentChange, setCurrentChange] = useState<string>(initialChange || '0%');
    const [isUp, setIsUp] = useState<boolean>(initialChange ? initialChange.startsWith('+') : false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const topic = `stock:${stockId}`;

        // Ensure connection (idempotent)
        realtimeApi.connect();

        const handleUpdate = (data: TradeInfo) => {
            setCurrentPrice(data.price);

            let changeVal = data.change_price;
            let signedChange = 0;

            if (data.change === 'RISE') signedChange = changeVal;
            else if (data.change === 'FALL') signedChange = -changeVal;

            const prevClose = data.price - signedChange;

            let percent = 0;
            if (prevClose !== 0) {
                percent = (signedChange / prevClose) * 100;
            }

            const sign = percent > 0 ? '+' : '';
            const percentStr = `${sign}${percent.toFixed(2)}%`;

            setCurrentChange(percentStr);
            setIsUp(data.change === 'RISE');

            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        };

        realtimeApi.subscribe(topic, handleUpdate);

        return () => {
            realtimeApi.unsubscribe(topic, handleUpdate);
        };
    }, [stockId]);

    return {
        price: currentPrice.toLocaleString(),
        change: currentChange,
        isUp,
        animate
    };
};

// Derived Asset Types
export interface CalculatedAsset extends Asset {
    currentPrice: number;
    valuation: number;    // Total Value (price * amount)
    profit: number;       // Valuation - Cost
    profitRate: number;   // Profit / Cost * 100
}

interface PortfolioCalculation {
    assets: CalculatedAsset[];
    totalValuation: number;     // Sum of all asset valuations
    totalCost: number;          // Sum of all asset costs
    totalProfit: number;
    totalProfitRate: number;
}

export const useCalculatedAssets = (initialAssets: Asset[]): PortfolioCalculation => {
    const [prices, setPrices] = useState<Record<string, number>>({});

    // Initialize prices map from initial assets if available (might be undefined now)
    useEffect(() => {
        const initialMap: Record<string, number> = {};
        initialAssets.forEach(asset => {
            if (asset.stock.rawPrice) {
                initialMap[asset.stock.id] = asset.stock.rawPrice;
            }
        });
        setPrices(initialMap);
    }, [initialAssets]); // Dependent on initialAssets changes

    // Subscriber Effect
    useEffect(() => {
        realtimeApi.connect();

        const subscriptions: { topic: string, callback: (data: TradeInfo) => void }[] = [];

        initialAssets.forEach(asset => {
            const topic = `stock:${asset.stock.id}`;
            const callback = (data: TradeInfo) => {
                setPrices(prev => ({
                    ...prev,
                    [asset.stock.id]: data.price
                }));
            };

            realtimeApi.subscribe(topic, callback);
            subscriptions.push({ topic, callback });
        });

        return () => {
            subscriptions.forEach(sub => realtimeApi.unsubscribe(sub.topic, sub.callback));
        };
    }, [initialAssets]);

    // Recalculate
    const [calculated, setCalculated] = useState<PortfolioCalculation>({
        assets: [],
        totalValuation: 0,
        totalCost: 0,
        totalProfit: 0,
        totalProfitRate: 0
    });

    useEffect(() => {
        let totalValuation = 0;
        let totalCost = 0;

        const computedAssets: CalculatedAsset[] = initialAssets.map(asset => {
            // Use socket price if available, else fallback to rawPrice (snapshot), else 0
            const currentPrice = prices[asset.stock.id] ?? asset.stock.rawPrice ?? 0;
            const cost = asset.amount * asset.purchasePrice;
            const valuation = asset.amount * currentPrice;
            const profit = valuation - cost;
            const profitRate = cost === 0 ? 0 : (profit / cost) * 100;

            totalValuation += valuation;
            totalCost += cost;

            return {
                ...asset,
                currentPrice,
                valuation,
                profit,
                profitRate
            };
        });

        const totalProfit = totalValuation - totalCost;
        const totalProfitRate = totalCost === 0 ? 0 : (totalProfit / totalCost) * 100;

        setCalculated({
            assets: computedAssets,
            totalValuation,
            totalCost,
            totalProfit,
            totalProfitRate
        });
    }, [prices, initialAssets]);

    return calculated;
};
