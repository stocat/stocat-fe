import { useState, useEffect } from "react";
import type { IndexInfo } from "./Header.types";
import { mockIndexInfo } from "./Header.mock";

interface UseIndexInfoResult {
  data: IndexInfo | null;
  isLoading: boolean;
  error: Error | null;
}

export function useIndexInfo(): UseIndexInfoResult {
  const [data, setData] = useState<IndexInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // api 호출시 주석 제거
    // const response = await fetch('/api/market/index');
    // const json = await response.json();
    // setData(json);
    setData(mockIndexInfo);
    setIsLoading(false);
  }, []);

  return { data, isLoading, error };
}
