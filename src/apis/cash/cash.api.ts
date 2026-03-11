import apiClient from "../client"
import type { ApiResponse, PaginatedData } from "../client.types"
import type { CashBalance, CashHistoryItem, CashHistoryParams } from "./cash.types"
import type { Currency } from "../../types/common"

export async function getCashBalance(currency: Currency): Promise<CashBalance> {
  const response = await apiClient.get<ApiResponse<CashBalance>>("/cash/balance", {
    params: { currency },
  })
  return response.data.data
}

export async function getCashHistory(params: CashHistoryParams): Promise<PaginatedData<CashHistoryItem>> {
  const response = await apiClient.get<ApiResponse<PaginatedData<CashHistoryItem>>>("/cash/history", {
    params,
  })
  return response.data.data
}
