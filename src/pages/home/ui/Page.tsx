
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock, MarketType, Asset } from "@/shared/api/types";
import { useRealTimePrice, useCalculatedAssets } from "@/shared/hooks/useRealTime";
import { ChevronRight, Bell, Menu } from "lucide-react";

export const HomePage = () => {
    return (
        <div className="pb-8 bg-gray-50 min-h-screen">
            <HomeHeader />
            <div className="px-5 mt-6 space-y-6">
                <MyWalletSection />
                <MyInvestmentCard />
            </div>

            <div className="mt-8 mb-10 space-y-8">
                <TodayPickSection />
                <WeeklyRankingSection />
            </div>
        </div>
    );
};

const HomeHeader = () => {
    const [nickname, setNickname] = useState("User");

    useEffect(() => {
        api.getMe().then(user => setNickname(user.nickname)).catch(() => setNickname("Guest"));
    }, []);

    return (
        <div className="bg-white sticky top-0 z-20 border-b border-gray-100">
            {/* Ticker */}
            <div className="bg-white px-5 py-2 border-b border-gray-50 flex items-center gap-2">
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">Live</span>
                <span className="text-[10px] text-gray-600 font-medium">코스닥 915.20 -0.4%</span>
            </div>

            <div className="flex justify-between items-start px-5 py-5">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">안녕하세요, {nickname}님!</h1>
                    <p className="text-xs text-gray-400 mt-1">24시간 43분 뒤면 종목이 소멸돼요!</p>
                </div>
                <div className="flex gap-1">
                    <button className="p-2 relative rounded-full hover:bg-gray-50 transition">
                        <Bell className="w-6 h-6 text-gray-400" />
                        <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-50 transition">
                        <Menu className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const MyWalletSection = () => {
    return (
        <div>
            <div className="flex justify-between items-end mb-3">
                <h2 className="text-sm font-bold text-gray-500">나의 지갑</h2>
                <span className="text-[10px] text-gray-300">20:42 기준</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 font-bold mb-1">원화</p>
                    <p className="text-sm font-bold text-gray-900">505,000원</p>
                </div>
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 font-bold mb-1">달러</p>
                    <p className="text-sm font-bold text-gray-900">$0</p>
                </div>
            </div>
        </div>
    );
};

const MyInvestmentCard = () => {
    const [myAssets, setMyAssets] = useState<Asset[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.getMyAssets().then(setMyAssets);
    }, []);

    const { totalValuation, totalProfit, totalProfitRate, assets } = useCalculatedAssets(myAssets);

    // Formatting
    const fmt = (n: number) => Math.round(n).toLocaleString();
    const sign = (n: number) => n > 0 ? '+' : '';
    const isProfitable = totalProfit >= 0;
    const colorClass = isProfitable ? 'text-red-500' : 'text-blue-500';

    // Get first asset for preview
    const firstAsset = assets.length > 0 ? assets[0] : null;

    return (
        <div>
            <div className="flex justify-between items-center mb-3" onClick={() => navigate('/my-investment')}>
                <h2 className="text-sm font-bold text-gray-500">나의 투자</h2>
                <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100" onClick={() => navigate('/my-investment')}>
                <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
                        {fmt(totalValuation)}원
                    </h3>
                    <p className={`text-sm font-bold ${colorClass}`}>
                        {sign(totalProfit)}{fmt(totalProfit)}원 ({sign(totalProfitRate)}{totalProfitRate.toFixed(1)}%)
                    </p>
                </div>

                <div className="flex gap-2 mb-4">
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg flex items-center gap-1">
                        직접 설정한 순 <span className="text-xs">▾</span>
                    </span>
                </div>

                {firstAsset && (
                    <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-xl">
                                📈
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{firstAsset.stock.name}</p>
                                <p className="text-xs text-gray-400">내 평균 {fmt(firstAsset.purchasePrice)}원</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 text-sm">{fmt(firstAsset.currentPrice * firstAsset.amount)}원</p>
                            <p className={`text-xs font-bold ${firstAsset.profit >= 0 ? 'text-red-500' : 'text-blue-500'}`}>
                                {sign(firstAsset.profitRate)}{firstAsset.profitRate.toFixed(1)}%
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <button className="w-full mt-3 bg-gray-200 py-3 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-300 transition">
                분석 결과 요약
            </button>
        </div>
    );
};

const TodayPickSection = () => {
    return (
        <div className="space-y-6">
            <h2 className="px-5 text-sm font-bold text-gray-900">오늘의 픽</h2>
            <div className="space-y-6">
                <CategoryGrid title="한국" type="korea" />
                <CategoryGrid title="미국" type="us" />
                <CategoryGrid title="CRYPTO" type="coin" />
            </div>
        </div>
    );
};

const CategoryGrid = ({ title, type }: { title: string; type: MarketType }) => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.getRecommendedStocks(type).then(setStocks);
    }, [type]);

    return (
        <div className="px-5">
            <div className="text-xs font-bold text-gray-500 mb-3">{title}</div>
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x">
                {stocks.map(stock => (
                    <div key={stock.id} onClick={() => navigate(`/asset/${stock.id}`)} className="min-w-[100px] bg-white rounded-xl border border-gray-100 p-3 flex flex-col items-center text-center cursor-pointer hover:border-blue-200 transition snap-start">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg mb-2 flex items-center justify-center border border-gray-50 relative">
                            {/* Logo Placeholder */}
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <p className="font-bold text-gray-900 text-xs mb-1 w-full truncate">{stock.name}</p>
                        <span className="text-[9px] text-gray-400 bg-gray-50 px-1 rounded mb-2 w-full truncate">정보 기술</span>
                        <StockPriceDisplay stock={stock} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const StockPriceDisplay = ({ stock }: { stock: Stock }) => {
    const { price, change, isUp } = useRealTimePrice(stock.id, stock.price, stock.change);
    return (
        <div className="w-full">
            <p className="text-[10px] font-bold text-gray-800">{stock.currency}{price}</p>
            <p className={`text-[9px] font-bold ${isUp ? 'text-red-500' : 'text-blue-500'}`}>{change}</p>
        </div>
    );
};

const WeeklyRankingSection = () => {
    return (
        <div className="px-5">
            <h2 className="text-sm font-bold text-gray-900 mb-4">이번 주 랭킹</h2>
            <div className="space-y-2">
                {[1, 2, 3].map(rank => (
                    <div key={rank} className="bg-gray-200 h-16 rounded-xl w-full animate-pulse"></div>
                ))}
            </div>
        </div>
    );
};
