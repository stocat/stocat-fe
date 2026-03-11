import apiClient from "../client"
import type { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, SignupRequest, SignupResponse } from "./auth.types"

export async function signup(data: SignupRequest): Promise<SignupResponse> {
  const response = await apiClient.post<SignupResponse>("/auth/signup", data)
  return response.data
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>("/auth/login", data)
  return response.data
}

export async function refreshToken(data: RefreshRequest): Promise<RefreshResponse> {
  const response = await apiClient.post<RefreshResponse>("/auth/refresh", data)
  return response.data
}
