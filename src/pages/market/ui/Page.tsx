
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock } from "@/shared/api/types";

export const MarketPage = () => {
    // Categories: all, korea, us, coin
    const [activeTab, setActiveTab] = useState<'all' | 'korea' | 'us' | 'coin'>('all');
    const [searchTerm, setSearchTerm] = useState("");
    const [stocks, setStocks] = useState<Stock[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch specific category or all
        const fetchStocks = async () => {
            if (activeTab === 'all') {
                const results = await api.getStocks(searchTerm);
                setStocks(results);
            } else {
                const results = await api.getRecommendedStocks(activeTab); // reusing this for now, ideally getStocks would take type
                // But simplified logic: fetch all and client-side filter for now or implement filter in API
                // For simplicity let's stick to getAllStocks and filter
                const all = await api.getAllStocks();
                const filtered = all.filter(s =>
                    (activeTab === 'all' || s.type === activeTab) &&
                    (searchTerm === '' || s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.code.toLowerCase().includes(searchTerm.toLowerCase()))
                );
                setStocks(filtered);
            }
        };
        fetchStocks();
    }, [activeTab, searchTerm]);


    return (
        <div className="pb-8">
            <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-100">
                <h1 className="text-2xl font-bold mb-3">거래소</h1>
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="주식, 코인 검색"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
            </div>

            <div className="px-4 mt-2">
                <div className="flex gap-2 overflow-x-auto pb-4 pt-2 -mx-4 px-4 scrollbar-hide">
                    <FilterChip label="전체" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                    <FilterChip label="국내" active={activeTab === 'korea'} onClick={() => setActiveTab('korea')} />
                    <FilterChip label="해외" active={activeTab === 'us'} onClick={() => setActiveTab('us')} />
                    <FilterChip label="가상화폐" active={activeTab === 'coin'} onClick={() => setActiveTab('coin')} />
                </div>

                <div className="mt-2 flex flex-col gap-2">
                    {stocks.map((stock) => (
                        <div
                            key={stock.id}
                            onClick={() => navigate(`/asset/${stock.id}`)}
                            className="flex items-center justify-between p-4 bg-white rounded-xl active:bg-gray-50 transition cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                                    {stock.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{stock.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs text-gray-500">{stock.code}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold ${stock.isUp ? 'text-red-500' : 'text-blue-500'}`}>
                                    {stock.currency}{stock.price} {stock.currency ? '' : '₩'}
                                </p>
                                <p className={`text-xs font-medium ${stock.isUp ? 'text-red-400' : 'text-blue-400'}`}>
                                    {stock.change}
                                </p>
                            </div>
                        </div>
                    ))}
                    {stocks.length === 0 && (
                        <div className="text-center py-10 text-gray-400 text-sm">
                            검색 결과가 없습니다.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const FilterChip = ({ label, active = false, onClick }: { label: string; active?: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${active
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}>
        {label}
    </button>
);

const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);
