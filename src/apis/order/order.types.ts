import type { OrderSide, OrderStatus, OrderTif, OrderType } from "../../types/common"

export interface OrderRequest {
  orderType: OrderType
  orderTif: OrderTif
  symbol: string
  quantity: number
  price: number
}

export interface OrderResponse {
  id: number
  assetId: number
  side: OrderSide
  status: OrderStatus
  quantity: number
  price: number
  createdAt: string
}
