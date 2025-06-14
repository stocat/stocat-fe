
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Stock {
  id: number;
  symbol: string;
  name: string;
  currentPrice: number;
  changeAmount: number;
  changePercent: number;
  previousClose: number;
  volume: number;
  marketCap: string;
}

interface StockCardProps {
  stock: Stock;
  onClick: () => void;
  compact?: boolean;
}

const StockCard: React.FC<StockCardProps> = ({ stock, onClick, compact }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toLocaleString();
  };

  const getChangeColor = () => {
    if (stock.changeAmount > 0) return 'text-red-600';
    if (stock.changeAmount < 0) return 'text-blue-600';
    return 'text-gray-600';
  };

  const getChangeBgColor = () => {
    if (stock.changeAmount > 0) return 'bg-red-50 border-red-200 hover:bg-red-100';
    if (stock.changeAmount < 0) return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
    return 'bg-gray-50 border-gray-200 hover:bg-gray-100';
  };

  const getTrendIcon = () => {
    if (stock.changeAmount > 0) return <TrendingUp className="w-4 h-4" />;
    if (stock.changeAmount < 0) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  return (
    <div 
      className={`rounded-xl p-${compact ? '3' : '4'} border-2 transition-all duration-200 hover:shadow-lg cursor-pointer active:scale-95 ${getChangeBgColor()} ${compact ? 'min-h-0' : ''}`}
      onClick={onClick}
      style={{ minHeight: compact ? 0 : undefined }}
    >
      <div className={`flex justify-between items-start mb-${compact ? '2' : '3'}`}>
        <div>
          <div className="text-xs text-gray-500 font-medium">
            {stock.symbol}
          </div>
          <h3 className="text-base font-bold text-gray-800">
            {stock.name}
          </h3>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">
            ₩{formatPrice(stock.currentPrice)}
          </div>
          <div className={`flex items-center gap-1 text-sm ${getChangeColor()}`}>
            {getTrendIcon()}
            <span className="font-semibold">
              {stock.changeAmount > 0 ? '+' : ''}{formatPrice(stock.changeAmount)}
            </span>
          </div>
        </div>
      </div>
      <div className={`text-center py-${compact ? '1' : '2'} rounded-lg ${getChangeColor()}`}>
        <span className="font-bold text-sm">
          ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
        </span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-600">
        <div>
          <span className="block">전일종가</span>
          <span className="font-medium">₩{formatPrice(stock.previousClose)}</span>
        </div>
        <div className="text-right">
          <span className="block">거래량</span>
          <span className="font-medium">{formatVolume(stock.volume)}</span>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
