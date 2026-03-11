import { create } from "zustand"
import type { OrderSide, Currency } from "../types/common"

interface ExchangeRateMessage {
  currencyPair: string
  exchangeRate: number
  timestamp: string
}

interface TradeMessage {
  code: string
  side: OrderSide
  qty: number
  price: number
  priceCurrency: Currency
  feeAmount: number
  feeCurrency: Currency
  occurredAt: string
}

interface WebSocketState {
  exchangeRate: ExchangeRateMessage | null
  cryptoTrade: TradeMessage | null
  krStockTrade: TradeMessage | null
  setExchangeRate: (data: ExchangeRateMessage) => void
  setCryptoTrade: (data: TradeMessage) => void
  setKrStockTrade: (data: TradeMessage) => void
}

export const useWebSocketStore = create<WebSocketState>((set) => ({
  exchangeRate: null,
  cryptoTrade: null,
  krStockTrade: null,
  setExchangeRate: (data) => set({ exchangeRate: data }),
  setCryptoTrade: (data) => set({ cryptoTrade: data }),
  setKrStockTrade: (data) => set({ krStockTrade: data }),
}))
