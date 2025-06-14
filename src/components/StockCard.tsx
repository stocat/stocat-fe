
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
}

const StockCard: React.FC<StockCardProps> = ({ stock }) => {
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
    if (stock.changeAmount > 0) return 'bg-red-50 border-red-200';
    if (stock.changeAmount < 0) return 'bg-blue-50 border-blue-200';
    return 'bg-gray-50 border-gray-200';
  };

  const getTrendIcon = () => {
    if (stock.changeAmount > 0) return <TrendingUp className="w-4 h-4" />;
    if (stock.changeAmount < 0) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  return (
    <div className={`rounded-xl p-6 border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${getChangeBgColor()}`}>
      {/* 주식 기본 정보 */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 font-medium">
          {stock.symbol}
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {stock.name}
        </h3>
      </div>

      {/* 현재 가격 */}
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">
          ₩{formatPrice(stock.currentPrice)}
        </div>
      </div>

      {/* 변동 정보 */}
      <div className={`flex items-center gap-2 mb-4 ${getChangeColor()}`}>
        {getTrendIcon()}
        <span className="font-semibold">
          {stock.changeAmount > 0 ? '+' : ''}{formatPrice(stock.changeAmount)}
        </span>
        <span className="font-semibold">
          ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
        </span>
      </div>

      {/* 추가 정보 */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>전일종가</span>
          <span className="font-medium">₩{formatPrice(stock.previousClose)}</span>
        </div>
        <div className="flex justify-between">
          <span>거래량</span>
          <span className="font-medium">{formatVolume(stock.volume)}</span>
        </div>
        <div className="flex justify-between">
          <span>시가총액</span>
          <span className="font-medium">{stock.marketCap}</span>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
