import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:1337/api',
  withCredentials: true, //important if using cookies later
  headers: {
    'Content-Type': 'application/json',
  },
});
