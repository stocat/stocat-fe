
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Asset } from "@/shared/api/types";
import { useCalculatedAssets } from "@/shared/hooks/useRealTime";

export const PortfolioPage = () => {
    const navigate = useNavigate();
    const [myAssets, setMyAssets] = useState<Asset[]>([]);

    useEffect(() => {
        api.getMyAssets().then(setMyAssets);
    }, []);

    // Client-side calc
    const { totalValuation, totalProfit, totalProfitRate, assets } = useCalculatedAssets(myAssets);

    const fmt = (n: number) => n.toLocaleString();
    const sign = (n: number) => n > 0 ? '+' : '';
    const color = (n: number) => n > 0 ? 'text-red-500' : n < 0 ? 'text-blue-500' : 'text-gray-500';

    return (
        <div className="pb-20 bg-gray-50 min-h-screen">
            <div className="bg-white px-4 py-4 sticky top-0 z-10 border-b border-gray-100 flex items-center gap-3">
                <button onClick={() => navigate(-1)}>
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h1 className="text-lg font-bold text-gray-900">내 투자 현황</h1>
            </div>

            <div className="bg-white p-6 mb-2">
                <p className="text-sm text-gray-500 mb-1">총 평가금액</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{fmt(totalValuation)}원</h2>
                <p className={`text-sm font-bold ${color(totalProfit)}`}>
                    {sign(totalProfit)}{fmt(totalProfit)}원 ({sign(totalProfitRate)}{totalProfitRate.toFixed(2)}%)
                </p>
            </div>

            <div className="mt-2 bg-white min-h-[500px]">
                <div className="px-4 py-3 border-b border-gray-100 font-bold text-sm text-gray-800">
                    보유 종목 ({assets.length})
                </div>

                <div>
                    {assets.map((asset) => (
                        <div
                            key={asset.stock.id}
                            className="px-4 py-4 border-b border-gray-50 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer"
                            onClick={() => navigate(`/asset/${asset.stock.id}`)}
                        >
                            <div className="flex items-center gap-3">
                                {/* Placeholder Icon */}
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                                    LOGO
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{asset.stock.name}</p>
                                    <p className="text-xs text-gray-400">{asset.amount}주 보유</p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-bold text-gray-900 text-sm">{fmt(asset.valuation)}원</p>
                                <p className={`text-xs ${color(asset.profitRate)}`}>
                                    {sign(asset.profitRate)}{asset.profitRate.toFixed(2)}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
