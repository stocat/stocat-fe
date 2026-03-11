import apiClient from "../client"
import type { ApiResponse } from "../client.types"
import type { OrderRequest, OrderResponse } from "./order.types"

export async function buyOrder(data: OrderRequest): Promise<OrderResponse> {
  const response = await apiClient.post<ApiResponse<OrderResponse>>("/order/buy", data)
  return response.data.data
}

export async function sellOrder(data: OrderRequest): Promise<OrderResponse> {
  const response = await apiClient.post<ApiResponse<OrderResponse>>("/order/sell", data)
  return response.data.data
}

export async function cancelOrder(orderId: number): Promise<OrderResponse> {
  const response = await apiClient.post<ApiResponse<OrderResponse>>(`/order/${orderId}/cancel`)
  return response.data.data
}
