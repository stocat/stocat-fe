import { useEffect, useState, type ReactNode } from "react"
import { useAuthStore } from "../store/authStore"
import { refreshToken } from "../apis/auth/auth.api"

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const { refreshToken: storedRefreshToken, setTokens, clearAuth } = useAuthStore()

  useEffect(() => {
    async function initAuth() {
      if (!storedRefreshToken) {
        setIsInitialized(true)
        return
      }

      try {
        const response = await refreshToken({ refreshToken: storedRefreshToken })
        setTokens(response.accessToken, storedRefreshToken, response.expiresIn)
      } catch {
        clearAuth()
      } finally {
        setIsInitialized(true)
      }
    }

    initAuth()
  }, [])

  if (!isInitialized) return null

  return <>{children}</>
}
