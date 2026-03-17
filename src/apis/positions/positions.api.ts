import apiClient from "../client"
import type { ApiResponse } from "../client.types"
import type { Position } from "./positions.types"

export async function getPositions(): Promise<Position[]> {
  const response = await apiClient.get<ApiResponse<Position[]>>("/positions")
  return response.data.data
}

export async function getPosition(positionId: number): Promise<Position> {
  const response = await apiClient.get<ApiResponse<Position>>(`/positions/${positionId}`)
  return response.data.data
}
