import { useMutation } from "@tanstack/react-query"
import { login } from "../../apis/auth/auth.api"
import { useAuthStore } from "../../store/authStore"
import type { LoginRequest } from "../../apis/auth/auth.types"

export function useLogin() {
  const { setTokens } = useAuthStore()

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken, data.expiresIn)
    },
  })
}
