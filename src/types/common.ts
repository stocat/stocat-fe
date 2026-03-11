export type Currency = "KRW" | "USD" | "BTC" | "USDT"
export type OrderSide = "BUY" | "SELL"
export type OrderType = "LIMIT" | "MARKET"
export type OrderTif = "GTC" | "IOC" | "FOK"
export type OrderStatus = "PENDING" | "FILLED" | "CANCELED" | "REJECTED"
export type TransactionType = "DEPOSIT" | "WITHDRAW"

export interface PaginationParams {
  page?: number
  size?: number
}
