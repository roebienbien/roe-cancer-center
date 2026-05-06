// export const login = async (email: string, password: string) => {
//   const data = await api("/auth/login", {
//     method: "POST",
//     body: JSON.stringify({ email, password })
//   })
//   localStorage.setItem("token", data.token)
// }

import { api } from '@/shared/lib/axios';

export const login = async (credentials: { email: string; password: string }) => {
  const res = await api.post('/auth/login', credentials);

  return res.data.data;
};

export const register = async (data: { email: string; password: string }) => {
  return await api.post('/users', data);

  // should be
  // return await api.post("/auth/register")
};

// export const login = async (email: string, password: string) => {
//   const res = await api.post("/auth/login", { email, password })
//
//   const accessToken = res.data.data.accessToken;
//   localStorage.setItem("accessToken", accessToken);
//
//   return res.data.data.accessToken;
//
//
// }
