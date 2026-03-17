import type { Currency, PaginationParams } from "../../types/common"

export interface ExchangePreviewParams {
  fromCurrency: Currency
  toCurrency: Currency
  fromAmount?: number
  toAmount?: number
}

export interface ExchangePreview {
  fromAmount: number
  toAmount: number
  exchangeRate: number
  rateLockKey: string
  expiresIn: number
}

export interface ExchangeRequest {
  rateLockKey: string
}

export interface ExchangeResult {
  id: number
  fromCurrency: Currency
  toCurrency: Currency
  fromAmount: number
  toAmount: number
  exchangeRate: number
  exchangedAt: string
}

export interface ExchangeHistoryParams extends PaginationParams {
  from?: string
  to?: string
  sort?: string
}
