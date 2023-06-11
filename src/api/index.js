import axios from "axios";

const instance = axios.create({
  //   baseURL: "https://task-react-auth.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
});

axios.interceptors.request.use((config) => {
  const token = localStorage.get("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default instance;
