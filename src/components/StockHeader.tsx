
import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

const StockHeader = () => {
  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <TrendingUp className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">
          오늘의 주식 선정
        </h1>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-lg">{formattedDate}</span>
      </div>
      
      <p className="mt-4 text-gray-500 text-lg">
        매일 오전 9시에 엄선된 5개 종목의 실시간 정보
      </p>
    </div>
  );
};

export default StockHeader;
