import axios from "axios";

const instance = axios.create({
  method: "POST",
  baseURL: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
