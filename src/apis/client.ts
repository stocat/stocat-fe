import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios"
import { useAuthStore } from "../store/authStore"

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

let refreshPromise: Promise<string> | null = null

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { accessToken, memberId } = useAuthStore.getState()

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  if (memberId !== null) {
    config.headers["X-MEMBER-ID"] = memberId
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config

    if (error.response?.status !== 401 || !originalRequest) {
      return Promise.reject(error)
    }

    const { refreshToken, setTokens, clearAuth } = useAuthStore.getState()

    if (!refreshToken) {
      clearAuth()
      window.location.href = "/login"
      return Promise.reject(error)
    }

    if (!refreshPromise) {
      refreshPromise = axios
        .post<{ accessToken: string; expiresIn: number }>(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          { refreshToken },
        )
        .then((res) => {
          const { accessToken, expiresIn } = res.data
          setTokens(accessToken, refreshToken, expiresIn)
          return accessToken
        })
        .catch((refreshError) => {
          clearAuth()
          window.location.href = "/login"
          return Promise.reject(refreshError)
        })
        .finally(() => {
          refreshPromise = null
        })
    }

    const newAccessToken = await refreshPromise
    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
    return apiClient(originalRequest)
  },
)

export default apiClient
