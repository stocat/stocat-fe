
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { Stock } from "@/shared/api/types";
import { useRealTimePrice } from "@/shared/hooks/useRealTime";
import * as Slider from '@radix-ui/react-slider';
import { ArrowLeft, Heart, Menu } from "lucide-react";

export const BuyPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [stock, setStock] = useState<Stock | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (id) {
            api.getStockDetail(id).then(item => {
                if (item) setStock(item);
            });
        }
    }, [id]);

    if (!stock) return <div className="p-10 text-center">Loading...</div>;

    if (isComplete) return <PurchaseComplete navigate={navigate} />

    return <BuyContent stock={stock} quantity={quantity} setQuantity={setQuantity} onBuy={() => setIsComplete(true)} navigate={navigate} />;
};

const BuyContent = ({ stock, quantity, setQuantity, onBuy, navigate }: { stock: Stock, quantity: number, setQuantity: (n: number) => void, onBuy: () => void, navigate: any }) => {
    // Real time price
    const { price, change, isUp } = useRealTimePrice(stock.id, stock.rawPrice ?? 0, stock.change);

    // Parse price string to number for calculation (removing currency symbols and commas)
    const currentPriceNum = Number(price.replace(/[^0-9.-]+/g, ""));
    const totalCost = currentPriceNum * quantity;

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <button onClick={() => navigate(-1)} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                </button>
                <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-gray-300" />
                    <Menu className="w-6 h-6 text-gray-300" />
                </div>
            </div>

            {/* Title / Chart Area */}
            <div className="px-5 py-4 flex-1">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 mb-1">{stock.name}</h1>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">{price}</span>
                            <span className={`text-sm font-bold ${isUp ? 'text-red-500' : 'text-blue-500'}`}>{change}</span>
                        </div>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">20:00 기준</span>
                </div>

                {/* Mock Chart */}
                <div className="w-full h-64 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center relative overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-200">
                        <svg className="w-full h-full p-10" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M0 35 L 20 20 L 30 25 L 50 10 L 70 20 L 100 5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Bottom Sheet / Buy Interaction */}
            <div className="bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] border-t border-gray-100 p-6 pb-10">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-gray-400">원화 505,000원</span>
                    <span className="text-xl font-bold text-gray-900">{totalCost.toLocaleString()}원</span>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <div className="text-sm font-bold text-gray-500">
                        현재가 약 {price}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900 font-bold">몇 주 구매할까요?</span>
                        <div className="w-12 h-8 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-900">
                            {quantity}주
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="mb-8 px-2">
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5"
                        value={[quantity]}
                        max={10}
                        step={1}
                        onValueChange={(val) => setQuantity(val[0])}
                    >
                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-gray-900 rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-6 h-6 bg-white border-[3px] border-gray-900 shadow-md rounded-full hover:bg-gray-50 focus:outline-none focus:scale-110 transition"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <div className="flex justify-between mt-2 text-xs font-bold text-gray-300">
                        <span>1주</span>
                        <span>최대</span>
                    </div>
                </div>

                <button
                    onClick={onBuy}
                    className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl text-lg hover:bg-black transition active:scale-[0.98]"
                >
                    구매하기
                </button>
            </div>
        </div>
    );
};

const PurchaseComplete = ({ navigate }: { navigate: any }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pb-20 p-6 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
            <span className="text-4xl text-white">✓</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">구매가 완료되었어요!</h2>
        <p className="text-gray-400 text-sm mb-10">내 투자 페이지에서 확인해보세요.</p>

        <button
            onClick={() => navigate('/my-investment')}
            className="w-full bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition"
        >
            내 투자 확인하기
        </button>
    </div>
);
