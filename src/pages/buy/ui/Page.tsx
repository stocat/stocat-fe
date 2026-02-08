
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock } from "@/shared/api/types";

export const BuyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [stock, setStock] = useState<Stock | null>(null);

    const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
    const [price, setPrice] = useState<number>(stock?.rawPrice ?? 0);
    const [amount, setAmount] = useState<number>(1);

    useEffect(() => {
        if (id) {
            api.getStockDetail(id).then(found => {
                if (found) {
                    setStock(found);
                    setPrice(found.rawPrice);
                }
            });
        }
    }, [id]);

    if (!stock) return <div className="p-4 text-center">Loading...</div>;

    const total = price * amount;

    return (
        <div className="pb-8">
            <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                    <XIcon className="w-6 h-6 text-gray-900" />
                </button>
                <div className="text-center">
                    <h1 className="font-bold text-gray-900">{stock.name}</h1>
                    <p className="text-xs text-red-500">
                        {stock.currency || ''}{stock.price} {stock.currency ? '' : '₩'} ({stock.change})
                    </p>
                </div>
                <div className="w-10" />
            </header>

            <div className="px-4 mt-6">
                <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                    <button
                        onClick={() => setOrderType('buy')}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition ${orderType === 'buy' ? 'bg-red-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        매수 (구매)
                    </button>
                    <button
                        onClick={() => setOrderType('sell')}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition ${orderType === 'sell' ? 'bg-blue-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        매도 (판매)
                    </button>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-600">주문 가격 ({stock.currency || 'KRW'})</label>
                            <div className="flex gap-2">
                                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">-</button>
                                <button className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">+</button>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className={`w-full text-2xl font-bold bg-white border-b-2 py-2 focus:outline-none transition ${orderType === 'buy' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'}`}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-600">수량</label>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full text-2xl font-bold bg-white border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition text-gray-900"
                            />
                            <span className="absolute right-0 bottom-3 text-gray-400 font-medium">주</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <PercentageButton label="10%" onClick={() => { }} />
                            <PercentageButton label="25%" onClick={() => { }} />
                            <PercentageButton label="50%" onClick={() => { }} />
                            <PercentageButton label="최대" onClick={() => { }} />
                        </div>
                    </div>

                    <div className="pt-8 mb-24">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-500 font-medium">총 주문 금액</span>
                            <span className={`text-2xl font-bold ${orderType === 'buy' ? 'text-red-500' : 'text-blue-500'}`}>
                                {stock.currency || ''}{total.toLocaleString()} {stock.currency ? '' : '₩'}
                            </span>
                        </div>
                        <button className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition ${orderType === 'buy'
                            ? 'bg-red-500 hover:bg-red-600 shadow-red-200'
                            : 'bg-blue-500 hover:bg-blue-600 shadow-blue-200'
                            }`}>
                            {orderType === 'buy' ? '매수하기' : '매도하기'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PercentageButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="flex-1 py-2 bg-gray-50 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition"
    >
        {label}
    </button>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);
