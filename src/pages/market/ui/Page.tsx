
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock } from "@/shared/api/types";
import { useRealTimePrice } from "@/shared/hooks/useRealTime";
import { Search } from "lucide-react";

export const MarketPage = () => {
    // Categories: all, korea, us, coin
    const [activeTab, setActiveTab] = useState<'korea' | 'us' | 'coin'>('korea');
    const [searchTerm, setSearchTerm] = useState("");
    const [stocks, setStocks] = useState<Stock[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch specific category or all
        const fetchStocks = async () => {
            const results = await api.getRecommendedStocks(activeTab);
            if (searchTerm) {
                setStocks(results.filter(s =>
                    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    s.code.toLowerCase().includes(searchTerm.toLowerCase())
                ));
            } else {
                setStocks(results);
            }
        };
        fetchStocks();
    }, [activeTab, searchTerm]);

    return (
        <div className="pb-8">
            <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-100">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="주식, 코인 검색"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-100 rounded-xl py-2.5 pl-9 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
            </div>

            <div className="px-4 mt-3">
                {/* News Summary Box */}
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold text-gray-500 mb-1">오늘의 주요 증권 소식 한 줄 요약</p>
                    <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
                    <div className="text-right">
                        <span className="text-[10px] text-gray-400">더 보기</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-4">
                    <FilterChip label="한국" active={activeTab === 'korea'} onClick={() => setActiveTab('korea')} />
                    <FilterChip label="미국" active={activeTab === 'us'} onClick={() => setActiveTab('us')} />
                    <FilterChip label="CRYPTO" active={activeTab === 'coin'} onClick={() => setActiveTab('coin')} />
                </div>

                {/* Sort Row */}
                <div className="flex gap-4 mb-2 overflow-x-auto scrollbar-hide">
                    <SortButton label="인기" active={true} />
                    <SortButton label="거래대금" active={false} />
                    <SortButton label="거래량" active={false} />
                    <SortButton label="급상승" active={false} />
                    <SortButton label="급하락" active={false} />
                </div>

                <div className="flex flex-col gap-0">
                    {stocks.map((stock, index) => (
                        <StockListItem key={stock.id} stock={stock} index={index + 1} navigate={navigate} />
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
        className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${active
            ? "bg-gray-800 text-white"
            : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}>
        {label}
    </button>
);

const SortButton = ({ label, active }: { label: string, active: boolean }) => (
    <button className={`text-xs font-bold whitespace-nowrap pb-2 border-b-2 transition ${active ? 'border-black text-black' : 'border-transparent text-gray-400'}`}>
        {label}
    </button>
);

const StockListItem = ({ stock, index, navigate }: { stock: Stock; index: number; navigate: any }) => {
    const { price, change, isUp, animate } = useRealTimePrice(stock.id, stock.rawPrice ?? 0, stock.change);
    const isTop3 = index <= 3;

    return (
        <div
            onClick={() => navigate(`/asset/${stock.id}`)} // This will need to go to Buy Page eventually, or Detail then Buy
            className="flex items-center justify-between py-4 border-b border-gray-50 active:bg-gray-50 transition cursor-pointer"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center relative">
                    {/* Rank Badge */}
                    <span className={`absolute -top-1 -left-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${isTop3 ? 'bg-red-500' : 'bg-gray-400'}`}>
                        {index}
                    </span>
                    {/* Placeholder Logo */}
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">{stock.name}</p>
                    <p className="text-[10px] text-gray-400">{stock.code}</p>
                </div>
            </div>

            <div className="text-right">
                <p className={`font-bold text-sm transition-colors duration-300 ${animate ? 'text-blue-600' : 'text-gray-900'}`}>
                    {stock.currency}{price}
                </p>
                <p className={`text-[10px] font-bold ${isUp ? 'text-red-500' : 'text-blue-500'}`}>
                    {change}
                </p>
            </div>
        </div>
    );
};
