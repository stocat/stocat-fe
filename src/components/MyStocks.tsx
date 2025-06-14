
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface OwnedStock {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

interface MyStocksProps {
  ownedStocks: OwnedStock[];
}

const MyStocks: React.FC<MyStocksProps> = ({ ownedStocks }) => {
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
    <div className="mt-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">보유 종목</h3>
      <div className="space-y-3">
        {ownedStocks.map((stock) => {
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
    </div>
  );
};

export default MyStocks;
