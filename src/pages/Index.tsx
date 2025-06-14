import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, User, TrendingDown, Minus } from 'lucide-react';
import StockCard from '../components/StockCard';
import LastUpdated from '../components/LastUpdated';
import PurchaseDialog from '../components/PurchaseDialog';

// 전체 주식 데이터 풀 (실제로는 API에서 가져올 데이터)
const allStockData = [
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
  },
  {
    id: 6,
    symbol: '207940',
    name: '삼성바이오로직스',
    currentPrice: 750000,
    changeAmount: 15000,
    changePercent: 2.04,
    previousClose: 735000,
    volume: 120000,
    marketCap: '107조 2,500억'
  },
  {
    id: 7,
    symbol: '006400',
    name: '삼성SDI',
    currentPrice: 385000,
    changeAmount: -8000,
    changePercent: -2.04,
    previousClose: 393000,
    volume: 380000,
    marketCap: '54조 3,200억'
  },
  {
    id: 8,
    symbol: '028260',
    name: '삼성물산',
    currentPrice: 128000,
    changeAmount: 2000,
    changePercent: 1.59,
    previousClose: 126000,
    volume: 680000,
    marketCap: '15조 3,600억'
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
  const [stocks, setStocks] = useState<typeof allStockData>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [selectedStock, setSelectedStock] = useState<typeof allStockData[0] | null>(null);
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

  // 랜덤으로 5개 종목 선택
  const selectRandomStocks = () => {
    const shuffled = [...allStockData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  // 실시간 가격 업데이트 시뮬레이션 (실제로는 웹소켓 연결)
  const simulateRealtimePriceUpdate = () => {
    setStocks(prevStocks => 
      prevStocks.map(stock => {
        // -2% ~ +2% 범위에서 랜덤 가격 변동
        const changePercent = (Math.random() - 0.5) * 4;
        const changeAmount = Math.round(stock.previousClose * (changePercent / 100));
        const newPrice = stock.previousClose + changeAmount;
        
        return {
          ...stock,
          currentPrice: Math.max(newPrice, 1000), // 최소 1000원
          changeAmount,
          changePercent: Number(changePercent.toFixed(2)),
          volume: stock.volume + Math.floor(Math.random() * 100000)
        };
      })
    );
    
    // 보유 주식 현재가도 업데이트
    setOwnedStocks(prevOwnedStocks =>
      prevOwnedStocks.map(ownedStock => {
        const updatedStock = stocks.find(stock => stock.id === ownedStock.id);
        return updatedStock 
          ? { ...ownedStock, currentPrice: updatedStock.currentPrice }
          : ownedStock;
      })
    );
    
    setLastUpdated(new Date());
    console.log('실시간 주식 데이터 업데이트됨');
  };

  // 전체 수익률 계산
  const calculateTotalProfitLoss = () => {
    if (ownedStocks.length === 0) return { amount: 0, percent: 0 };
    
    let totalPurchaseValue = 0;
    let totalCurrentValue = 0;
    
    ownedStocks.forEach(stock => {
      totalPurchaseValue += stock.purchasePrice * stock.quantity;
      totalCurrentValue += stock.currentPrice * stock.quantity;
    });
    
    const profitLossAmount = totalCurrentValue - totalPurchaseValue;
    const profitLossPercent = totalPurchaseValue > 0 ? (profitLossAmount / totalPurchaseValue) * 100 : 0;
    
    return {
      amount: profitLossAmount,
      percent: profitLossPercent
    };
  };

  // 초기 랜덤 종목 선택
  useEffect(() => {
    setStocks(selectRandomStocks());
  }, []);

  // 실시간 가격 업데이트 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      simulateRealtimePriceUpdate();
    }, 3000);

    return () => clearInterval(interval);
  }, [stocks]);

  const handleStockClick = (stock: typeof allStockData[0]) => {
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

  const refreshStocks = () => {
    console.log('새로운 랜덤 종목 선택 및 데이터 새로고침');
    setStocks(selectRandomStocks());
    setLastUpdated(new Date());
  };

  const totalProfitLoss = calculateTotalProfitLoss();
  const isProfit = totalProfitLoss.amount >= 0;

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

        {/* 전체 수익률 */}
        {ownedStocks.length > 0 && (
          <div className="mb-6 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">전체 수익률</div>
              <div className={`flex items-center justify-center gap-2 text-lg font-bold ${isProfit ? 'text-red-600' : 'text-blue-600'}`}>
                {isProfit ? <TrendingUp className="w-5 h-5" /> : totalProfitLoss.amount < 0 ? <TrendingDown className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                <span>
                  {isProfit ? '+' : ''}₩{formatPrice(Math.abs(totalProfitLoss.amount))}
                </span>
                <span className="text-sm">
                  ({isProfit ? '+' : ''}{totalProfitLoss.percent.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        )}

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
            오늘의 랜덤 종목 (실시간 업데이트)
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
            onClick={refreshStocks}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl w-full"
          >
            새로운 종목 선택
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            랜덤으로 선택된 5개 종목의<br/>
            실시간 주가 정보를 확인하세요
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
