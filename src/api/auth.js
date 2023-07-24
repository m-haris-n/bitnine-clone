import axios from "./axios";

export const register = (data) => {
   const res = axios.post("/api/user/create/", data);
   return res;
};
export const login = (data) => {
   const res = axios.post("/api/user/token/", data);
   return res;
};
