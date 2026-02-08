
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock, MarketType, UserSummary, Asset } from "@/shared/api/types";
import { useRealTimePrice, useCalculatedAssets } from "@/shared/hooks/useRealTime";

export const HomePage = () => {
    return (
        <div className="pb-8 bg-gray-50 min-h-screen">
            <HomeHeader />
            <div className="px-4 mt-6">
                <MyWalletSection />
            </div>
            <div className="px-4 mt-6">
                <MyInvestmentSection />
            </div>
            <div className="mt-8 mb-10">
                <TodayPickSection />
            </div>
        </div>
    );
};

const HomeHeader = () => {
    return (
        <div className="bg-white sticky top-0 z-10 border-b border-gray-100">
            {/* Mock Ticker */}
            <div className="bg-white px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                <span className="text-xs font-bold text-red-500">Live</span>
                <span className="text-xs text-gray-700">코스닥 915.20 -0.4%</span>
            </div>

            <div className="flex justify-between items-start px-4 py-6">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">안녕하세요, 강혜린님!</h1>
                    <p className="text-sm text-gray-400 mt-1">24시간 43분 뒤면 종목이 소멸돼요!</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 relative">
                        <BellIcon className="w-6 h-6 text-gray-400" />
                        <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <button className="p-2">
                        <MenuIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const MyWalletSection = () => {
    return (
        <div>
            <h2 className="text-sm font-bold text-gray-500 mb-3 flex justify-between items-end">
                나의 지갑
                <span className="text-[10px] text-gray-300 font-normal">20:42 기준</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-200 rounded-xl p-4 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 font-bold mb-1">원화</p>
                        <p className="text-sm font-bold text-gray-800">505,000원</p>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-xl p-4 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 font-bold mb-1">달러</p>
                        <p className="text-sm font-bold text-gray-800">$0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MyInvestmentSection = () => {
    const [summary, setSummary] = useState<UserSummary | null>(null);
    const [myAssets, setMyAssets] = useState<Asset[]>([]);
    const navigate = useNavigate();

    // Initial fetch
    useEffect(() => {
        api.getUserSummary().then(setSummary);
        api.getMyAssets().then(setMyAssets);
    }, []);

    // Client-side real-time calculation
    const { totalValuation, totalProfit, totalProfitRate, assets } = useCalculatedAssets(myAssets);
    const hasAssets = assets.length > 0;

    // Helper for formatting
    const fmt = (n: number) => n.toLocaleString();
    const sign = (n: number) => n > 0 ? '+' : '';
    const color = (n: number) => n > 0 ? 'text-red-500' : n < 0 ? 'text-blue-500' : 'text-gray-500';

    // Mock graph component
    const MiniGraph = () => (
        <svg viewBox="0 0 100 40" className="w-24 h-12 text-red-500 stroke-current fill-none stroke-2">
            <path d="M0 35 Q 20 20, 40 30 T 100 5" />
        </svg>
    );

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-bold text-gray-500">나의 투자</h2>
                <button onClick={() => navigate('/portfolio')} className="p-1">
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 transition-all font-mono tracking-tight">
                        {summary ? fmt(totalValuation) : '...'}원
                    </h3>
                    <p className={`text-sm font-bold mt-1 flex items-center gap-1 ${color(totalProfit)}`}>
                        {sign(totalProfit)}{fmt(totalProfit)}원 ({sign(totalProfitRate)}{totalProfitRate.toFixed(1)}%)
                    </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-50 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-xs font-bold text-gray-600">직접 설정한 순</span>
                    </div>
                </div>

                {hasAssets ? (
                    <div className="flex items-center justify-between py-3 border-t border-gray-50" onClick={() => navigate('/portfolio')}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                                <MiniGraph />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{assets[0].stock.name}</p>
                                <p className="text-xs text-gray-400">내 평균 {fmt(assets[0].purchasePrice)}원</p>
                            </div>
                        </div>
                        <div className="text-right">
                            {/* Display real-time Current Price */}
                            <span className={`block text-xs font-bold ${color(assets[0].profit)}`}>
                                {fmt(assets[0].currentPrice)}원
                            </span>
                            <span className={`text-[10px] ${color(assets[0].profitRate)}`}>
                                {sign(assets[0].profitRate)}{assets[0].profitRate.toFixed(1)}%
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-4 text-xs text-gray-400">
                        보유 종목이 없습니다.
                    </div>
                )}
            </div>

            <button className="w-full mt-3 bg-gray-200 py-3 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-300 transition">
                분석 결과 요약
            </button>
            <div className="mt-4 p-4 bg-gray-100 rounded-xl text-xs text-gray-400 text-center">
                아직 튜토리얼을 완주하지 않았어요!<br />
                stocat이 어렵진 않으신가요? 클릭하면 튜토리얼 창으로 이동합니다.
            </div>
        </div>
    );
};

const TodayPickSection = () => {
    return (
        <div className="space-y-8">
            <h2 className="px-4 text-sm font-bold text-gray-900">오늘의 픽</h2>

            <CategorySection title="한국" type="korea" />
            <CategorySection title="미국" type="us" />
            <CategorySection title="CRYPTO" type="coin" />
        </div>
    );
};

const CategorySection = ({ title, type }: { title: string; type: MarketType }) => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.getRecommendedStocks(type).then(setStocks);
    }, [type]);

    return (
        <div className="bg-white py-4">
            <h3 className="px-4 text-xs font-bold text-gray-500 mb-3">{title}</h3>
            <div className="flex overflow-x-auto px-4 gap-3 scrollbar-hide pb-2">
                {stocks.map((stock) => (
                    <div
                        key={stock.id}
                        onClick={() => navigate(`/asset/${stock.id}`)}
                        className="min-w-[120px] p-3 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-gray-300 transition"
                    >
                        <div className="w-12 h-12 bg-gray-50 mb-3 overflow-hidden rounded-md border border-gray-100 relative">
                            {/* Placeholder for logo */}
                            <svg className="w-full h-full text-gray-300 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="font-bold text-gray-900 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full">{stock.name}</p>
                        <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-sm mt-1">정보기술(IT)</span>

                        <div className="mt-3 w-full border-t border-gray-50 pt-2 flex justify-between items-center px-1">
                            <StockPriceDisplay stock={stock} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StockPriceDisplay = ({ stock }: { stock: Stock }) => {
    const { price, change, isUp, animate } = useRealTimePrice(stock.id, stock.price, stock.change);

    return (
        <>
            <span className={`text-[10px] font-bold text-gray-800 transition-colors duration-300 ${animate ? 'text-blue-500 bg-blue-50 rounded' : ''}`}>
                {stock.currency || ''}{price}
            </span>
            <span className={`text-[10px] font-bold ${isUp ? 'text-red-500' : 'text-blue-500'}`}>
                {change}
            </span>
        </>
    );
}

// Icons
const BellIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
);
