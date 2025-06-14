
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, User, Clock } from 'lucide-react';
import StockCard from '../components/StockCard';
import LastUpdated from '../components/LastUpdated';
import PurchaseDialog from '../components/PurchaseDialog';

// 샘플 주식 데이터
const mockStockData = [
  {
    id: 1,
    symbol: '005930',
    name: '삼성전자',
    currentPrice: 71800,
    changeAmount: 800,
    changePercent: 1.13,
    previousClose: 71000,
    volume: 15420000,
    marketCap: '428조 6,550억'
  },
  {
    id: 2,
    symbol: '000660',
    name: 'SK하이닉스',
    currentPrice: 89400,
    changeAmount: -1200,
    changePercent: -1.32,
    previousClose: 90600,
    volume: 8920000,
    marketCap: '65조 1,200억'
  },
  {
    id: 3,
    symbol: '035420',
    name: 'NAVER',
    currentPrice: 158000,
    changeAmount: 2500,
    changePercent: 1.61,
    previousClose: 155500,
    volume: 2150000,
    marketCap: '25조 8,400억'
  },
  {
    id: 4,
    symbol: '005380',
    name: '현대차',
    currentPrice: 196000,
    changeAmount: -3000,
    changePercent: -1.51,
    previousClose: 199000,
    volume: 1890000,
    marketCap: '42조 1,800억'
  },
  {
    id: 5,
    symbol: '051910',
    name: 'LG화학',
    currentPrice: 420000,
    changeAmount: 8500,
    changePercent: 2.07,
    previousClose: 411500,
    volume: 650000,
    marketCap: '29조 6,400억'
  }
];

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
  const [balance, setBalance] = useState(1000000);
  const [ownedStocks, setOwnedStocks] = useState<OwnedStock[]>([]);
  const [stocks, setStocks] = useState(mockStockData);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [selectedStock, setSelectedStock] = useState<typeof mockStockData[0] | null>(null);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);

  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const fetchStockData = () => {
    console.log('주식 데이터를 업데이트합니다...');
    setLastUpdated(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchStockData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleStockClick = (stock: typeof mockStockData[0]) => {
    if (balance < stock.currentPrice) {
      alert('잔액이 부족합니다!');
      return;
    }
    setSelectedStock(stock);
    setShowPurchaseDialog(true);
  };

  const handlePurchase = () => {
    if (!selectedStock) return;
    
    const newBalance = balance - selectedStock.currentPrice;
    setBalance(newBalance);

    const existingStock = ownedStocks.find(ownedStock => ownedStock.id === selectedStock.id);
    
    if (existingStock) {
      setOwnedStocks(prev => prev.map(ownedStock => 
        ownedStock.id === selectedStock.id 
          ? { ...ownedStock, quantity: ownedStock.quantity + 1 }
          : ownedStock
      ));
    } else {
      const newOwnedStock: OwnedStock = {
        id: selectedStock.id,
        symbol: selectedStock.symbol,
        name: selectedStock.name,
        quantity: 1,
        purchasePrice: selectedStock.currentPrice,
        currentPrice: selectedStock.currentPrice
      };
      setOwnedStocks(prev => [...prev, newOwnedStock]);
    }
    
    setShowPurchaseDialog(false);
    setSelectedStock(null);
  };

  const navigateToMyPage = () => {
    navigate('/mypage', { 
      state: { 
        balance, 
        ownedStocks 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">주식 투자 앱</h1>
          </div>
          <button
            onClick={navigateToMyPage}
            className="p-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* 보유 현금 (작게) */}
        <div className="mb-4">
          <div className="text-xs text-gray-500">보유 현금</div>
          <div className="text-sm font-medium text-gray-700">₩{formatPrice(balance)}</div>
        </div>

        {/* 날짜 표시 */}
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{formattedDate}</span>
        </div>

        <LastUpdated lastUpdated={lastUpdated} />
        
        <div className="space-y-4 mt-6">
          <h2 className="text-lg font-bold text-gray-800 text-center">
            오늘의 추천 종목 (1개만 선택 가능)
          </h2>
          {stocks.map((stock) => (
            <StockCard 
              key={stock.id} 
              stock={stock} 
              onClick={() => handleStockClick(stock)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={fetchStockData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl w-full"
          >
            데이터 새로고침
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            매일 오전 9시에 엄선된 5개 종목 중<br/>
            1개만 선택하여 투자할 수 있습니다
          </p>
        </div>

        <PurchaseDialog
          stock={selectedStock}
          isOpen={showPurchaseDialog}
          onClose={() => setShowPurchaseDialog(false)}
          onConfirm={handlePurchase}
        />
      </div>
    </div>
  );
};

export default Index;
