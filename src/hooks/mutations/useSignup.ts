import { useMutation } from "@tanstack/react-query"
import { signup } from "../../apis/auth/auth.api"
import type { SignupRequest } from "../../apis/auth/auth.types"

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupRequest) => signup(data),
  })
}
