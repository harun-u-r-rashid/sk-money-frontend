import axios from "axios";

const baseURL = "http://127.0.0.1:8000/"; 
// const baseURL = "https://sk-money-save-u6f9.onrender.com/";


const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  config => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    // console.log(config.headers); 
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;















