
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface LastUpdatedProps {
  lastUpdated: Date;
}

const LastUpdated: React.FC<LastUpdatedProps> = ({ lastUpdated }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="flex items-center justify-center gap-2 text-gray-500 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 w-fit mx-auto">
      <RefreshCw className="w-4 h-4" />
      <span className="text-sm">
        마지막 업데이트: {formatTime(lastUpdated)}
      </span>
    </div>
  );
};

export default LastUpdated;
