import { useMutation, useQueryClient } from "@tanstack/react-query"
import { executeExchange } from "../../apis/exchange/exchange.api"
import { queryKeys } from "../queries/queryKeys"
import type { ExchangeRequest } from "../../apis/exchange/exchange.types"

export function useExecuteExchange() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ExchangeRequest) => executeExchange(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cash.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.exchange.historyRoot })
    },
  })
}
