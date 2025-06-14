
import React from "react";
import { useNavigate } from "react-router-dom";
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
  // localStorage나 전역상태 등에서 실제 앱이라면 가져오지만,
  // 여기서는 history.back 등으로 가정.
  // 임시: window.history.state에 저장
  try {
    const stocks = window.history.state?.usr?.ownedStocks;
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
            {ownedStocks.map((stock) => (
              <div
                key={stock.id}
                className="flex justify-between items-center rounded-lg border px-4 py-3 bg-white shadow-sm"
              >
                <div>
                  <div className="font-bold text-gray-800">{stock.name}</div>
                  <div className="text-xs text-gray-500">{stock.symbol}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-700">{stock.quantity}주</div>
                  <div className="text-xs text-gray-600">
                    ₩{formatPrice(stock.currentPrice)} /₩{formatPrice(stock.purchasePrice)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-6">보유 주식이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default MyStocks;
