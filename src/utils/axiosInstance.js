import axios from "axios";
import { jwtDecode } from "jwt-decode";


// https://sk-money-save-u6f9.onrender.com/
// const baseURL = "http://127.0.0.1:8000/";
const baseURL = "https://sk-money-save-u6f9.onrender.com/";


const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;
