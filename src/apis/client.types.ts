export interface ApiResponse<T> {
  success?: boolean
  data: T
  code: number
  message: string
  timestamp?: string
}

export interface PaginatedData<T> {
  content: T[]
  currentPage: number
  size: number
  totalElements: number
  totalPages: number
  hasNext: boolean
}

export interface PaginatedDataAlt<T> {
  content: T[]
  page: number
  size: number
  totalElements: number
  totalPages: number
  last: boolean
}
