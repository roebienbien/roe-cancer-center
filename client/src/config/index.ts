const BASE_URL = import.meta.env.VITE_BASE_URL;

const config = {
  baseUrl: BASE_URL || 'http://localhost:1337/api',
};

export default config;
