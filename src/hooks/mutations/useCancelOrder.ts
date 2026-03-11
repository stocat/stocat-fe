import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cancelOrder } from "../../apis/order/order.api"
import { queryKeys } from "../queries/queryKeys"

export function useCancelOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (orderId: number) => cancelOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.positions.all })
      queryClient.invalidateQueries({ queryKey: ["cash"] })
    },
  })
}
