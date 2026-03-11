import { useQuery } from "@tanstack/react-query"
import { getCashHistory } from "../../apis/cash/cash.api"
import { queryKeys } from "./queryKeys"
import type { CashHistoryParams } from "../../apis/cash/cash.types"

export function useCashHistory(params: CashHistoryParams) {
  return useQuery({
    queryKey: queryKeys.cash.history(params),
    queryFn: () => getCashHistory(params),
  })
}
