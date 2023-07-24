import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default axios.create({ baseURL: BASE_URL });

export const axiosPrivate = axios.create({
   baseURL: BASE_URL,
   headers: { "Content-Type": "application/json" },
   withCredentials: true,
});

axiosPrivate.interceptors.request.use(
   (config) => {
      const authToken = localStorage
         .getItem("authToken")
         ?.replace('"', "")
         .replace('"', "");
      console.log(`Token ${authToken}`);
      if (authToken) {
         config.headers.Authorization = `Token ${authToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);
