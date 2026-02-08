
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock } from "@/shared/api/types";
import { useRealTimePrice } from "@/shared/hooks/useRealTime";

export const AssetPage = () => {
    // 실제로는 ID를 기반으로 데이터 페칭
    const { id } = useParams();
    const navigate = useNavigate();
    const [stock, setStock] = useState<Stock | null>(null);

    useEffect(() => {
        if (id) {
            api.getStockDetail(id).then(found => {
                if (found) setStock(found);
            });
        }
    }, [id]);

    if (!stock) return <div className="p-4 text-center text-gray-400">Loading...</div>;

    return (
        <div className="pb-24">
            <AssetHeader stock={stock} onBack={() => navigate(-1)} />
            <div className="px-4 mt-4">
                <StockPriceInfo stock={stock} />
                <div className="mt-6">
                    <ChartPlaceholder />
                </div>
                <div className="mt-6">
                    <StockDetails stock={stock} />
                </div>
            </div>

            <BottomActionBar id={id} />
        </div>
    );
};

const AssetHeader = ({ stock, onBack }: { stock: Stock; onBack: () => void }) => {
    return (
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
            </button>
            <div className="text-center">
                <h1 className="text-lg font-bold text-gray-900">{stock.name}</h1>
                <p className="text-xs text-gray-500">{stock.code}</p>
            </div>
            <div className="w-10" /> {/* Spacer for centering */}
        </div>
    );
};

const StockPriceInfo = ({ stock }: { stock: Stock }) => {
    const { price, change, isUp, animate } = useRealTimePrice(stock.id, stock.rawPrice ?? 0, stock.change);

    return (
        <div className="text-center py-4">
            <h2 className={`text-4xl font-bold text-gray-900 transition-colors ${animate ? 'text-blue-600' : ''}`}>
                {stock.currency || ''}{price} {stock.currency ? '' : '₩'}
            </h2>
            <p className={`mt-1 text-lg font-medium ${isUp ? 'text-red-500' : 'text-blue-500'}`}>
                어제보다 {change}
            </p>
        </div>
    );
};

const ChartPlaceholder = () => {
    return (
        <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
            <p className="text-gray-400 font-medium z-10">차트 영역</p>
            {/* 시각적 장식을 위한 간단한 CSS 그래프 라인 */}
            <svg className="absolute bottom-0 left-0 right-0 h-1/2 w-full text-red-500 opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,50 L20,60 L40,30 L60,40 L80,10 L100,50 L100,100 Z" fill="currentColor" />
            </svg>
            <svg className="absolute bottom-0 left-0 right-0 h-1/2 w-full text-red-500" fill="none" stroke="currentColor" strokeWidth="2" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,50 L20,60 L40,30 L60,40 L80,10 L100,50" />
            </svg>
        </div>
    );
};

const StockDetails = ({ stock }: { stock: Stock }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <DetailItem label="거래량" value={stock.volume || '-'} />
            <DetailItem label="고가" value={stock.high || '-'} />
            <DetailItem label="저가" value={stock.low || '-'} />
            <DetailItem label="시가총액" value={stock.marketCap || '-'} />
        </div>
    );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div className="p-4 bg-gray-50 rounded-xl">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-bold text-gray-900 mt-1">{value}</p>
    </div>
);

const BottomActionBar = ({ id }: { id?: string }) => {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-[100] flex gap-3 max-w-md mx-auto">
            <button
                onClick={() => navigate(`/buy/${id}`)}
                className="flex-1 bg-blue-100 text-blue-600 py-3.5 rounded-xl font-bold hover:bg-blue-200 transition"
            >
                판매하기
            </button>
            <button
                onClick={() => navigate(`/buy/${id}`)}
                className="flex-1 bg-red-500 text-white py-3.5 rounded-xl font-bold hover:bg-red-600 transition shadow-lg shadow-red-200"
            >
                구매하기
            </button>
        </div>
    );
};

const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 18l-6-6 6-6" />
    </svg>
);
