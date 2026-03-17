import type { CashHistoryParams } from "../../apis/cash/cash.types"
import type { ExchangeHistoryParams, ExchangePreviewParams } from "../../apis/exchange/exchange.types"
import type { Currency } from "../../types/common"

export const queryKeys = {
  positions: {
    all: ["positions"] as const,
    detail: (id: number) => ["positions", id] as const,
  },
  cash: {
    all: ["cash"] as const,
    balance: (currency: Currency) => ["cash", "balance", currency] as const,
    history: (params: CashHistoryParams) => ["cash", "history", params] as const,
  },
  exchange: {
    historyRoot: ["exchange", "history"] as const,
    preview: (params: ExchangePreviewParams) => ["exchange", "preview", params] as const,
    history: (params?: ExchangeHistoryParams) => ["exchange", "history", params] as const,
  },
} as const
