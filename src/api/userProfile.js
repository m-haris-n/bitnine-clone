import { axiosPrivate } from "./axios";

export const getUserProfile = () => {
   const res = axiosPrivate.get("/api/user/me/");
   return res;
};

export const editUserProfile = (data) => {
   console.log("data", data);
   const res = axiosPrivate.patch("/api/user/me/", data);

   return res;
};
