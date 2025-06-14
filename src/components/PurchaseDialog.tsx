
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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

interface PurchaseDialogProps {
  stock: Stock | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PurchaseDialog: React.FC<PurchaseDialogProps> = ({ stock, isOpen, onClose, onConfirm }) => {
  if (!stock) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-4">
        <DialogHeader>
          <DialogTitle className="text-center">주식 구매 확인</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500">{stock.symbol}</div>
            <div className="text-lg font-bold text-gray-800 mb-2">{stock.name}</div>
            <div className="text-xl font-bold text-blue-600">
              ₩{formatPrice(stock.currentPrice)}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-sm text-gray-600 mb-1">구매 수량: 1주</div>
            <div className="text-sm text-gray-600">
              총 구매 금액: ₩{formatPrice(stock.currentPrice)}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 text-center mt-4">
            이 종목을 구매하시겠습니까?
          </p>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            취소
          </Button>
          <Button onClick={onConfirm} className="flex-1 bg-blue-600 hover:bg-blue-700">
            구매 확정
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
