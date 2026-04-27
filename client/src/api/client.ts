const API_URL = 'http://localhost:1337/api';

export const api = async (path: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  })


  return res.json()


  //normalize to avoid res.data;
  //on wrapped response
  // const data = await res.json();
  // return data.data ?? data;
}
