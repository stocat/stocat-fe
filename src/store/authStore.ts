import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  memberId: number | null
  expiresAt: number | null
  isAuthenticated: boolean
  setTokens: (accessToken: string, refreshToken: string, expiresIn: number) => void
  clearAuth: () => void
}

function extractMemberId(accessToken: string): number | null {
  try {
    const payload = accessToken.split(".")[1]
    const decoded = JSON.parse(atob(payload))
    return decoded.memberId ?? decoded.sub ?? null
  } catch {
    return null
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      memberId: null,
      expiresAt: null,
      isAuthenticated: false,

      setTokens: (accessToken, refreshToken, expiresIn) => {
        const memberId = extractMemberId(accessToken)
        const expiresAt = Date.now() + expiresIn * 1000

        set({
          accessToken,
          refreshToken,
          memberId,
          expiresAt,
          isAuthenticated: true,
        })
      },

      clearAuth: () => {
        set({
          accessToken: null,
          refreshToken: null,
          memberId: null,
          expiresAt: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        memberId: state.memberId,
        expiresAt: state.expiresAt,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
