import { useQuery } from "@tanstack/react-query"
import { getExchangeHistory } from "../../apis/exchange/exchange.api"
import { queryKeys } from "./queryKeys"
import type { ExchangeHistoryParams } from "../../apis/exchange/exchange.types"

export function useExchangeHistory(params?: ExchangeHistoryParams) {
  return useQuery({
    queryKey: queryKeys.exchange.history(params),
    queryFn: () => getExchangeHistory(params),
  })
}
