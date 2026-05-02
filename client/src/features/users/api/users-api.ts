import { api } from "@/shared/lib/axios";

export const getUsers = async () => {
  const res = await api.get("/users")

  return res.data.data;
}

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`)
}

