import apiClient from "../client"
import type { ApiResponse, PaginatedDataAlt } from "../client.types"
import type { ExchangeHistoryParams, ExchangePreview, ExchangePreviewParams, ExchangeRequest, ExchangeResult } from "./exchange.types"

export async function getExchangePreview(params: ExchangePreviewParams): Promise<ExchangePreview> {
  const response = await apiClient.get<ApiResponse<ExchangePreview>>("/exchange/preview", {
    params,
  })
  return response.data.data
}

export async function executeExchange(data: ExchangeRequest): Promise<ExchangeResult> {
  const response = await apiClient.post<ApiResponse<ExchangeResult>>("/exchange", data)
  return response.data.data
}

export async function getExchangeHistory(params?: ExchangeHistoryParams): Promise<PaginatedDataAlt<ExchangeResult>> {
  const response = await apiClient.get<ApiResponse<PaginatedDataAlt<ExchangeResult>>>("/exchange/history", {
    params,
  })
  return response.data.data
}
