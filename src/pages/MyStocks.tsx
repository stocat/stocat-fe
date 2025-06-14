
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SellDialog from "@/components/SellDialog";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface OwnedStock {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

const formatPrice = (price: number) => price.toLocaleString("ko-KR");

const MyStocks: React.FC = () => {
  const navigate = useNavigate();
  const location = window.history.state?.usr ? window.history.state.usr : {};
  const ownedStocks: OwnedStock[] = Array.isArray(location?.ownedStocks)
    ? location.ownedStocks
    : [];

  const [sellDialogOpen, setSellDialogOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<OwnedStock | null>(null);
  const [sellQty, setSellQty] = useState(1);
  const [notEnoughDialog, setNotEnoughDialog] = useState(false);

  const handleCardClick = (stock: OwnedStock) => {
    setSelectedStock(stock);
    setSellQty(1);
    setSellDialogOpen(true);
  };

  // 실제 판매 행위는 여기서 처리해야 함(잔고/보유주식 상태 필요).
  const handleSell = (qty: number) => {
    if (!selectedStock) return;
    if (qty > selectedStock.quantity) {
      setNotEnoughDialog(true);
      return;
    }
    window.alert("실제 판매 로직은 상태 관리 필요 (여기엔 예시용 안내만 박아둠)");
    setSellDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <button
          className="mb-6 flex items-center gap-2 text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </button>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">내 주식</h1>
        {ownedStocks.length > 0 ? (
          <div className="space-y-3">
            {ownedStocks.map((stock) => {
              const totalValue = stock.currentPrice * stock.quantity;
              const investedValue = stock.purchasePrice * stock.quantity;
              const profit = totalValue - investedValue;
              const profitPercent =
                investedValue > 0 ? (profit / investedValue) * 100 : 0;
              return (
                <div
                  key={stock.id}
                  className="flex justify-between items-end rounded-lg border px-4 py-2 bg-white shadow-sm hover:shadow-lg cursor-pointer transition"
                  onClick={() => handleCardClick(stock)}
                >
                  <div className="flex flex-col justify-between h-full min-w-0">
                    <div className="font-bold text-gray-800 truncate">{stock.name}</div>
                    <div className="text-xs text-gray-500 truncate">{stock.symbol}</div>
                    <div className="mt-3 text-sm text-gray-600">
                      <span className="font-semibold">{stock.quantity}주</span>
                    </div>
                  </div>
                  <div className="text-right min-w-[120px]">
                    <div className="font-bold text-blue-700">
                      ₩{formatPrice(totalValue)}
                    </div>
                    <div
                      className={`text-xs font-medium mt-1 ${
                        profit > 0
                          ? "text-red-600"
                          : profit < 0
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {profit > 0 ? "+" : ""}
                      {profitPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-6">보유 주식이 없습니다.</div>
        )}
      </div>
      <SellDialog
        stock={selectedStock}
        isOpen={sellDialogOpen}
        onClose={() => setSellDialogOpen(false)}
        onConfirm={handleSell}
        quantity={sellQty}
        setQuantity={setSellQty}
      />
      {/* 잔여수량 이상 판매 방지 안내 */}
      <AlertDialog open={notEnoughDialog} onOpenChange={setNotEnoughDialog}>
        <AlertDialogContent className="max-w-xs">
          <AlertDialogHeader>
            <AlertDialogTitle>판매 불가</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="py-2 text-center text-gray-700">판매 수량이 보유 수량을 초과했습니다.</div>
          <AlertDialogFooter>
            <Button onClick={() => setNotEnoughDialog(false)} className="w-full">확인</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MyStocks;
