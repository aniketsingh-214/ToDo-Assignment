import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const client = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.request.use((cfg) => {
  try {
    const token = localStorage.getItem("token");
    if (token) (cfg.headers as any).Authorization = `Bearer ${token}`;
    return cfg;
  } catch {
    return cfg;
  }
});

export default client;
