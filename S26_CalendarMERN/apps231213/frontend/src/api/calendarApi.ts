import axios from "axios";
import { getEnvVariables } from "../utils";

const { VITE_API_URL } = getEnvVariables();
console.log({ VITE_API_URL });

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

calendarApi.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["x-token"] = localStorage.getItem("token");
    config.headers.Authorization = localStorage.getItem("token");
  }

  return config;
});

export default calendarApi;
