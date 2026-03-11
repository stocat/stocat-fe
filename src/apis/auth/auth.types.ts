export interface SignupRequest {
  email: string
  password: string
  nickname?: string
}

export interface SignupResponse {
  userId: string
  email: string
  nickname: string
  createdAt: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface RefreshRequest {
  refreshToken: string
}

export interface RefreshResponse {
  accessToken: string
  expiresIn: number
}
