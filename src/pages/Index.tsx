import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import StockCard from '../components/StockCard';
import PurchaseDialog from '../components/PurchaseDialog';
import { useNavigate } from "react-router-dom";

// 전체 주식 데이터
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
  // 상태값 관리
  const [balance, setBalance] = useState(1000000);
  const [ownedStocks, setOwnedStocks] = useState<OwnedStock[]>([]);
  const [stocks, setStocks] = useState<typeof allStockData>([]);
  const [selectedStock, setSelectedStock] = useState<typeof allStockData[0] | null>(null);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  // 내 주식 토글 상태
  const [showMyStocks, setShowMyStocks] = useState(false);

  // USD 환율 (임시)
  const usdRate = 1300;

  const formatPrice = (price: number) => price.toLocaleString('ko-KR');

  // 랜덤 5종목
  const selectRandomStocks = () => {
    const shuffled = [...allStockData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  // 시세 변동 시뮬레이션
  const simulateRealtimePriceUpdate = () => {
    setStocks(prevStocks => {
      const newStocks = prevStocks.map(stock => {
        const changePercent = (Math.random() - 0.5) * 4;
        const changeAmount = Math.round(stock.previousClose * (changePercent / 100));
        const newPrice = stock.previousClose + changeAmount;
        return {
          ...stock,
          currentPrice: Math.max(newPrice, 1000),
          changeAmount,
          changePercent: Number(changePercent.toFixed(2)),
          volume: stock.volume + Math.floor(Math.random() * 100000),
        };
      });
      // 만약 구매 다이얼로그가 열려 있으면, 현재 선택 종목 데이터도 실시간 동기화
      if (showPurchaseDialog && selectedStock) {
        const found = newStocks.find(s => s.id === selectedStock.id);
        if (found) setSelectedStock(found);
      }
      return newStocks;
    });
    // 보유 주식 가격 업데이트
    setOwnedStocks(prevOwnedStocks =>
      prevOwnedStocks.map(ownedStock => {
        const updatedStock = stocks.find(stock => stock.id === ownedStock.id);
        return updatedStock
          ? { ...ownedStock, currentPrice: updatedStock.currentPrice }
          : ownedStock;
      })
    );
    console.log('실시간 주식 데이터 업데이트됨');
  };

  // (보유 주식의) 전체 수익률 계산
  const calculateTotalProfitLossForOwned = () => {
    if (ownedStocks.length === 0) return { amount: 0, percent: 0 };
    let totalPurchaseValue = 0, totalCurrentValue = 0;
    ownedStocks.forEach(stock => {
      totalPurchaseValue += stock.purchasePrice * stock.quantity;
      totalCurrentValue += stock.currentPrice * stock.quantity;
    });
    const profitLossAmount = totalCurrentValue - totalPurchaseValue;
    const profitLossPercent =
      totalPurchaseValue > 0 ? (profitLossAmount / totalPurchaseValue) * 100 : 0;
    return { amount: profitLossAmount, percent: profitLossPercent };
  };

  // 내 주식 전체 평가금액(현재가 × 수량의 총합)
  const getTotalCurrentStockValue = () => {
    if (ownedStocks.length === 0) return 0;
    return ownedStocks.reduce(
      (sum, stock) => sum + stock.currentPrice * stock.quantity,
      0,
    );
  };

  // 초기 로딩 및 실시간 시뮬레이션
  useEffect(() => {
    setStocks(selectRandomStocks());
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      simulateRealtimePriceUpdate();
    }, 3000);
    return () => clearInterval(interval);
  }, [stocks]);

  // 주식 카드 클릭 (구매 다이얼로그)
  const handleStockClick = (stock: typeof allStockData[0]) => {
    if (balance < stock.currentPrice) {
      alert('잔액이 부족합니다!');
      return;
    }
    setSelectedStock(stock);
    setPurchaseQuantity(1);
    setShowPurchaseDialog(true);
  };

  // 주식 구매 처리
  const handlePurchase = () => {
    if (!selectedStock) return;
    const totalCost = selectedStock.currentPrice * purchaseQuantity;
    if (balance < totalCost) {
      alert("잔액이 부족합니다!");
      return;
    }
    setBalance(prevBalance => prevBalance - totalCost);

    const existingStock = ownedStocks.find(ownedStock => ownedStock.id === selectedStock.id);
    if (existingStock) {
      setOwnedStocks(prev => prev.map(ownedStock =>
        ownedStock.id === selectedStock.id
          ? { ...ownedStock, quantity: ownedStock.quantity + purchaseQuantity }
          : ownedStock
      ));
    } else {
      const newOwnedStock: OwnedStock = {
        id: selectedStock.id,
        symbol: selectedStock.symbol,
        name: selectedStock.name,
        quantity: purchaseQuantity,
        purchasePrice: selectedStock.currentPrice,
        currentPrice: selectedStock.currentPrice
      };
      setOwnedStocks(prev => [...prev, newOwnedStock]);
    }
    setShowPurchaseDialog(false);
    setSelectedStock(null);
  };

  // 총 자산/수익 등 계산
  const totalProfitLoss = calculateTotalProfitLossForOwned();
  const isProfit = totalProfitLoss.amount >= 0;

  const totalCurrentStockValue = getTotalCurrentStockValue();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* 현금 잔고 헤더 */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">원화</div>
            <div className="text-lg font-bold text-gray-800">
              ₩{formatPrice(balance)}
            </div>
          </div>
          <div className="flex-1 text-right">
            <div className="text-xs text-gray-500 mb-1">달러</div>
            <div className="text-lg font-bold text-gray-800">
              ${formatPrice(Math.floor(balance / usdRate))}
            </div>
          </div>
        </div>

        {/* 내 주식 보기 버튼 및 전체 자산/수익 */}
        <div className="mb-6 bg-white rounded-xl p-3 shadow-sm border border-gray-200">
          {/* 내 주식 보기 > 버튼 */}
          <button
            className="block text-black text-base font-bold text-left hover:bg-gray-50 rounded px-0 py-2 transition w-fit mb-2"
            onClick={() =>
              navigate("/mystocks", {
                state: { ownedStocks },
              })
            }
          >
            내 주식 보기 &gt;
          </button>
          <div className="mt-1 text-center space-y-1">
            <div className="font-bold text-lg text-gray-800">
              {ownedStocks.length > 0
                ? `₩${formatPrice(getTotalCurrentStockValue())}`
                : "0원"}
            </div>
            <div
              className={`flex items-center justify-center gap-2 text-md ${
                totalProfitLoss.amount > 0
                  ? "text-red-600"
                  : totalProfitLoss.amount < 0
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <span>
                {totalProfitLoss.amount > 0 ? "+" : ""}
                ₩{formatPrice(Math.abs(totalProfitLoss.amount))} (
                {totalProfitLoss.amount > 0 ? "+" : ""}
                {totalProfitLoss.percent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        {/* 개별 종목 카드 */}
        <div className="space-y-4">
          {stocks.map((stock) => (
            <StockCard
              key={stock.id}
              stock={stock}
              onClick={() => handleStockClick(stock)}
            />
          ))}
        </div>

        <PurchaseDialog
          stock={selectedStock}
          isOpen={showPurchaseDialog}
          onClose={() => setShowPurchaseDialog(false)}
          onConfirm={handlePurchase}
          quantity={purchaseQuantity}
          setQuantity={setPurchaseQuantity}
          balance={balance}
        />
      </div>
    </div>
  );
};

export default Index;
