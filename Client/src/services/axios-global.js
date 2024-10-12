import axios from "axios";

let token = localStorage.getItem("token") || null;

const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default API;

// baseURL: "https://memory-app-backend.onrender.com",
