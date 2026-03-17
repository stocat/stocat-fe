import { useQuery } from "@tanstack/react-query"
import { getCashBalance } from "../../apis/cash/cash.api"
import { queryKeys } from "./queryKeys"
import type { Currency } from "../../types/common"

export function useCashBalance(currency: Currency) {
  return useQuery({
    queryKey: queryKeys.cash.balance(currency),
    queryFn: () => getCashBalance(currency),
  })
}
