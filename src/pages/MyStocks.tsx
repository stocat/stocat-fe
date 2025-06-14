
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface OwnedStock {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

function getOwnedStocks(): OwnedStock[] {
  try {
    const location = window.history.state?.usr ? window.history.state.usr : {};
    const stocks = location?.ownedStocks;
    if (Array.isArray(stocks)) return stocks;
    return [];
  } catch {
    return [];
  }
}

const formatPrice = (price: number) => price.toLocaleString("ko-KR");

const MyStocks: React.FC = () => {
  const navigate = useNavigate();
  const ownedStocks = getOwnedStocks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <button
          className="mb-6 flex items-center gap-2 text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </button>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">내 주식</h1>
        {ownedStocks.length > 0 ? (
          <div className="space-y-3">
            {ownedStocks.map((stock) => {
              // 각 주식별 총구매, 총평가, 수익률(%) 계산
              const totalValue = stock.currentPrice * stock.quantity;
              const investedValue = stock.purchasePrice * stock.quantity;
              const profit = totalValue - investedValue;
              const profitPercent = investedValue > 0 ? (profit / investedValue) * 100 : 0;
              return (
                <div
                  key={stock.id}
                  className="flex justify-between items-end rounded-lg border px-4 py-3 bg-white shadow-sm"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="font-bold text-gray-800">{stock.name}</div>
                      <div className="text-xs text-gray-500">{stock.symbol}</div>
                    </div>
                    <div className="mt-5 text-sm text-gray-600">
                      <span className="font-semibold">{stock.quantity}주</span>
                    </div>
                  </div>
                  <div className="text-right min-w-[110px]">
                    <div className="font-bold text-blue-700">
                      ₩{formatPrice(totalValue)}
                    </div>
                    <div
                      className={`text-xs font-medium mt-1 ${
                        profit > 0
                          ? "text-red-600"
                          : profit < 0
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {profit > 0 ? "+" : ""}
                      {profitPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-6">보유 주식이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default MyStocks;
