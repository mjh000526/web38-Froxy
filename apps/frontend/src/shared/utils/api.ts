import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('token');

  const token = raw ? JSON.parse(raw) : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
