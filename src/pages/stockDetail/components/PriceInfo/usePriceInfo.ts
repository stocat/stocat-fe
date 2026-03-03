import { useState, useEffect } from "react";
import type { PriceInfo } from "../../StockDetail.types";
import { getStockById } from "../../StockDetail.mock";

export function usePriceInfo(stockId: string) {
  const [priceInfo, setPriceInfo] = useState<PriceInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // api 호출시 주석 제거
    // const data = await fetchPriceInfo(stockId);
    const stock = getStockById(stockId);
    setPriceInfo(stock?.priceInfo ?? null);
    setIsLoading(false);
  }, [stockId]);

  return { priceInfo, isLoading, error };
}
