import axios from "axios";
import { jwtDecode } from "jwt-decode";

import dayjs from "dayjs";

// https://sk-money-save-u6f9.onrender.com/
// const baseURL = "http://127.0.0.1:8000/";
const baseURL = "https://sk-money-save-u6f9.onrender.com/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  async (req) => {
    let access_token = localStorage.getItem("access_token")
      ? JSON.parse(localStorage.getItem("access_token"))
      : null;
    let refresh_token = localStorage.getItem("refresh_token")
      ? JSON.parse(localStorage.getItem("refresh_token"))
      : null;

    if (access_token) {
      req.headers.Authorization = `Bearer ${access_token}`;
      const decodedToken = jwtDecode(access_token);
      const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;

      if (!isExpired) {
        return req;
      }

      try {
        const res = await axios.post(`${baseURL}auth/refresh/`, {
          refresh: refresh_token, 
        });

        if (res.status === 200) {
          localStorage.setItem("access_token", JSON.stringify(res.data.access));
          req.headers.Authorization = `Bearer ${res.data.access}`;
          return req;
        }
      } catch (error) {
        console.error("Refresh Token Expired", error);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return Promise.reject(error);
      }
    }

    return req;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
