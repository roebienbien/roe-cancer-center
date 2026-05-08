import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: true,
});

// remove interceptors if i move to cookies
// api.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem('accessToken');
//
//   if (accessToken) {
//     config.headers = config.headers || {};
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//
//   return config;
// });
