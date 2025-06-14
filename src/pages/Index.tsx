
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, ShoppingCart, Clock } from 'lucide-react';
import UserBalance from '../components/UserBalance';
import MyStocks from '../components/MyStocks';

interface OwnedStock {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

const Index = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(1000000); // 초기 100만원
  const [ownedStocks, setOwnedStocks] = useState<OwnedStock[]>([]);

  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const handlePurchase = (stock: any) => {
    const newBalance = balance - stock.currentPrice;
    setBalance(newBalance);

    const existingStock = ownedStocks.find(ownedStock => ownedStock.id === stock.id);
    
    if (existingStock) {
      setOwnedStocks(prev => prev.map(ownedStock => 
        ownedStock.id === stock.id 
          ? { ...ownedStock, quantity: ownedStock.quantity + 1 }
          : ownedStock
      ));
    } else {
      const newOwnedStock: OwnedStock = {
        id: stock.id,
        symbol: stock.symbol,
        name: stock.name,
        quantity: 1,
        purchasePrice: stock.currentPrice,
        currentPrice: stock.currentPrice
      };
      setOwnedStocks(prev => [...prev, newOwnedStock]);
    }
  };

  const navigateToStockPurchase = () => {
    navigate('/stock-purchase', { 
      state: { 
        balance, 
        onPurchase: handlePurchase 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              주식 투자 앱
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>
        </div>

        {/* 보유 현금 */}
        <UserBalance balance={balance} />

        {/* 보유 주식 */}
        {ownedStocks.length > 0 && (
          <MyStocks ownedStocks={ownedStocks} />
        )}

        {/* 오늘의 주식 구매 버튼 */}
        <div className="mt-8">
          <button
            onClick={navigateToStockPurchase}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            오늘의 국내 주식 사러가기
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            매일 오전 9시에 엄선된 5개 종목 중<br/>
            1개만 선택하여 투자할 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
