import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_REST_HOST,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
