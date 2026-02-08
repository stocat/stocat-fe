
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Asset } from "@/shared/api/types";
import { useCalculatedAssets } from "@/shared/hooks/useRealTime";

export const MyInvestmentPage = () => {
    const navigate = useNavigate();
    const [myAssets, setMyAssets] = useState<Asset[]>([]);
    const [activeTab, setActiveTab] = useState<'all' | 'korea' | 'us' | 'coin'>('all');

    useEffect(() => {
        api.getMyAssets().then(setMyAssets);
    }, []);

    const { totalValuation, totalProfit, totalProfitRate, assets } = useCalculatedAssets(myAssets);

    // Filter assets based on tab
    const filteredAssets = assets.filter(asset => {
        if (activeTab === 'all') return true;
        // Mock logic: assume we can check type. using stock.type if available or inferring
        return asset.stock.type === activeTab;
    });

    const fmt = (n: number) => Math.round(n).toLocaleString();
    const sign = (n: number) => n > 0 ? '+' : '';
    const color = (n: number) => n > 0 ? 'text-red-500' : n < 0 ? 'text-blue-500' : 'text-gray-500';

    return (
        <div className="pb-10 bg-white min-h-screen">
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 px-4 py-4 flex items-center justify-between">
                <button onClick={() => navigate(-1)}>
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex gap-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
            </div>

            <div className="px-4 mt-2">
                <p className="text-sm font-bold text-gray-900 mb-1">1월 4주차</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{fmt(totalValuation)}원</h1>
                <p className={`text-sm font-bold ${color(totalProfit)}`}>
                    {sign(totalProfit)}{fmt(totalProfit)}원 ({sign(totalProfitRate)}{totalProfitRate.toFixed(1)}%)
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="px-4 mt-6 flex gap-2">
                <FilterButton label="전체" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                <FilterButton label="한국" active={activeTab === 'korea'} onClick={() => setActiveTab('korea')} />
                <FilterButton label="미국" active={activeTab === 'us'} onClick={() => setActiveTab('us')} />
                <FilterButton label="CRYPTO" active={activeTab === 'coin'} onClick={() => setActiveTab('coin')} />
            </div>

            {/* Date Bar */}
            <div className="px-4 mt-6">
                <div className="bg-gray-100 py-1 px-3 text-xs font-bold text-gray-500 rounded-sm w-full">2025년 1월 30일</div>
            </div>

            {/* List */}
            <div className="px-4 mt-2 mb-20">
                {filteredAssets.map(asset => (
                    <div key={asset.stock.id} className="py-4 border-b border-gray-50 flex justify-between items-center" onClick={() => navigate(`/asset/${asset.stock.id}`)}>
                        <div className="flex items-center gap-3">
                            {/* Placeholder Icon */}
                            <div className="w-10 h-10 rounded-md bg-pink-100 flex items-center justify-center">
                                <span className="text-pink-500 font-bold">📈</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{asset.stock.name}</p>
                                <p className="text-xs text-gray-400">내 평균 {fmt(asset.purchasePrice)}원</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 text-sm">{fmt(asset.currentPrice * asset.amount)}원</p>
                            <p className={`text-xs font-bold ${color(asset.profitRate)}`}>
                                {sign(asset.profitRate)}{asset.profitRate.toFixed(1)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Floating Bottom */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-8 max-w-md mx-auto">
                <button className="w-full bg-gray-200 text-gray-500 font-bold py-3 rounded-xl text-sm">
                    투자 종목 소멸까지 24시간 43분 남았어요 !
                </button>
            </div>
        </div>
    );
};

const FilterButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition ${active ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500'}`}
    >
        {label}
    </button>
);
