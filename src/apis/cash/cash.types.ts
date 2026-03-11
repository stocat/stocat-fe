import type { Currency, PaginationParams, TransactionType } from "../../types/common"

export interface CashBalance {
  currency: Currency
  balance: number
  reservedBalance: number
  availableAmount: number
}

export interface CashHistoryItem {
  transactionId: number
  currency: Currency
  transactionType: TransactionType
  amount: number
  balanceAfter: number
  transactedAt: string
}

export interface CashHistoryParams extends PaginationParams {
  currency: Currency
  transactionType?: TransactionType
}
