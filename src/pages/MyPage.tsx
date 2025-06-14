
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Wallet, TrendingUp, TrendingDown } from 'lucide-react';

interface OwnedStock {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { balance, ownedStocks } = location.state || { balance: 0, ownedStocks: [] };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const calculateProfitLoss = (stock: OwnedStock) => {
    const totalPurchase = stock.purchasePrice * stock.quantity;
    const totalCurrent = stock.currentPrice * stock.quantity;
    return totalCurrent - totalPurchase;
  };

  const calculateProfitLossPercent = (stock: OwnedStock) => {
    const profitLoss = calculateProfitLoss(stock);
    const totalPurchase = stock.purchasePrice * stock.quantity;
    return (profitLoss / totalPurchase) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800 ml-2">내 정보</h1>
        </div>

        {/* 보유 현금 */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">보유 현금</div>
              <div className="text-xl font-bold text-gray-900">
                ₩{formatPrice(balance)}
              </div>
            </div>
          </div>
        </div>

        {/* 보유 주식 */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">보유 종목</h3>
          {ownedStocks.length === 0 ? (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-gray-400 text-sm">보유 중인 주식이 없습니다</div>
            </div>
          ) : (
            <div className="space-y-3">
              {ownedStocks.map((stock: OwnedStock) => {
                const profitLoss = calculateProfitLoss(stock);
                const profitLossPercent = calculateProfitLossPercent(stock);
                const isProfit = profitLoss >= 0;
                
                return (
                  <div key={stock.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-xs text-gray-500">{stock.symbol}</div>
                        <div className="text-sm font-bold text-gray-800">{stock.name}</div>
                        <div className="text-xs text-gray-500">{stock.quantity}주 보유</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">
                          ₩{formatPrice(stock.currentPrice * stock.quantity)}
                        </div>
                        <div className={`flex items-center gap-1 text-xs ${isProfit ? 'text-red-600' : 'text-blue-600'}`}>
                          {isProfit ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>
                            {isProfit ? '+' : ''}₩{formatPrice(Math.abs(profitLoss))}
                          </span>
                          <span>
                            ({isProfit ? '+' : ''}{profitLossPercent.toFixed(2)}%)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      매수가: ₩{formatPrice(stock.purchasePrice)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
