
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SellDialogProps {
  stock: {
    id: number;
    symbol: string;
    name: string;
    currentPrice: number;
    quantity: number;
    purchasePrice: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (qty: number) => void;
  quantity: number;
  setQuantity: (val: number) => void;
}

const SellDialog: React.FC<SellDialogProps> = ({
  stock,
  isOpen,
  onClose,
  onConfirm,
  quantity,
  setQuantity,
}) => {
  if (!stock) return null;

  const formatPrice = (price: number) => price.toLocaleString("ko-KR");
  const maxSell = Math.max(1, stock.quantity);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-4 p-4 pt-2 pb-3">
        <DialogHeader>
          <DialogTitle className="text-center">주식 판매 확인</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          {/* 종목 정보 */}
          <div className="text-center mb-1">
            <div className="text-xs text-gray-500">{stock.symbol}</div>
            <div className="text-base font-bold text-gray-800 mb-1">
              {stock.name}
            </div>
            <div className="text-lg font-bold text-blue-600">
              ₩{formatPrice(stock.currentPrice)}
            </div>
          </div>
          {/* 수량 입력 */}
          <div className="flex justify-center mb-2 gap-2 items-center">
            <div className="text-sm text-gray-600">판매 수량:</div>
            <input
              type="number"
              min={1}
              max={stock.quantity}
              value={quantity}
              onChange={(e) => {
                let val = +e.target.value;
                if (isNaN(val) || val < 1) val = 1;
                if (val > stock.quantity) val = stock.quantity;
                setQuantity(val);
              }}
              className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <span className="text-xs text-gray-400">(최대 {stock.quantity}주)</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-sm text-gray-600 mb-1">
              판매 금액: ₩{formatPrice(stock.currentPrice * quantity)}
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            {stock.name} 주식 {quantity}주를 판매하시겠습니까?
          </p>
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            취소
          </Button>
          <Button
            onClick={() => onConfirm(quantity)}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            disabled={quantity < 1 || quantity > stock.quantity}
          >
            판매 확정
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SellDialog;
