import { useQuery } from "@tanstack/react-query"
import { getExchangePreview } from "../../apis/exchange/exchange.api"
import { queryKeys } from "./queryKeys"
import type { ExchangePreviewParams } from "../../apis/exchange/exchange.types"

export function useExchangePreview(params: ExchangePreviewParams) {
  return useQuery({
    queryKey: queryKeys.exchange.preview(params),
    queryFn: () => getExchangePreview(params),
    enabled: !!params.fromCurrency && !!params.toCurrency && !!(params.fromAmount ?? params.toAmount),
  })
}
