import { useMutation, useQueryClient } from "@tanstack/react-query"
import { buyOrder } from "../../apis/order/order.api"
import { queryKeys } from "../queries/queryKeys"
import type { OrderRequest } from "../../apis/order/order.types"

export function useBuyOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: OrderRequest) => buyOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.positions.all })
      queryClient.invalidateQueries({ queryKey: ["cash"] })
    },
  })
}
