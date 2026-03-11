import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sellOrder } from "../../apis/order/order.api"
import { queryKeys } from "../queries/queryKeys"
import type { OrderRequest } from "../../apis/order/order.types"

export function useSellOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: OrderRequest) => sellOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.positions.all })
      queryClient.invalidateQueries({ queryKey: ["cash"] })
    },
  })
}
