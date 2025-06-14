
import React, { useState, useEffect } from 'react';
import StockCard from '../components/StockCard';
import StockHeader from '../components/StockHeader';
import LastUpdated from '../components/LastUpdated';
import UserBalance from '../components/UserBalance';
import MyStocks from '../components/MyStocks';
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
  const [stocks, setStocks] = useState(mockStockData);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [balance, setBalance] = useState(1000000); // 초기 100만원
  const [ownedStocks, setOwnedStocks] = useState<OwnedStock[]>([]);
  const [selectedStock, setSelectedStock] = useState<typeof mockStockData[0] | null>(null);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);

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

    const existingStock = ownedStocks.find(stock => stock.id === selectedStock.id);
    
    if (existingStock) {
      setOwnedStocks(prev => prev.map(stock => 
        stock.id === selectedStock.id 
          ? { ...stock, quantity: stock.quantity + 1 }
          : stock
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <StockHeader />
        <LastUpdated lastUpdated={lastUpdated} />
        
        <UserBalance balance={balance} />
        
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

        {ownedStocks.length > 0 && (
          <MyStocks ownedStocks={ownedStocks} />
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetchStockData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl w-full"
          >
            데이터 새로고침
          </button>
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
