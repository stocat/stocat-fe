
import React from 'react';
import { Wallet } from 'lucide-react';

interface UserBalanceProps {
  balance: number;
}

const UserBalance: React.FC<UserBalanceProps> = ({ balance }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mt-4">
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
  );
};

export default UserBalance;
