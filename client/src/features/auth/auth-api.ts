import { api } from "@/api/client"

export const login = async (email: string, password: string) => {
  const data = await api("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
  localStorage.setItem("token", data.token)
}
