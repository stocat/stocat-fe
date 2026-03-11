import { useMutation, useQueryClient } from "@tanstack/react-query"
import { executeExchange } from "../../apis/exchange/exchange.api"
import type { ExchangeRequest } from "../../apis/exchange/exchange.types"

export function useExecuteExchange() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ExchangeRequest) => executeExchange(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cash"] })
      queryClient.invalidateQueries({ queryKey: ["exchange", "history"] })
    },
  })
}
