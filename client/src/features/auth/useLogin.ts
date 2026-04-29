import { useMutation } from '@tanstack/react-query'
import { login } from './auth-api.ts'
// import { useNavigate } from 'react-router'


export const useLogin = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: (data: any) => {
      localStorage.setItem("accessToken", data.accessToken)
    }
  })
}
