import axios from "axios";

let token = localStorage.getItem("token") || null;

const API = axios.create({
  baseURL: "https://memories-app-mern-stack.onrender.com/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default API;

// baseURL: "https://memory-app-backend.onrender.com",
