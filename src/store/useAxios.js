import axios from "axios";

export const useAxios = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    "X-Url": window.location.pathname,
  },
  timeout: 1000,
  withCredentials: true,
});
