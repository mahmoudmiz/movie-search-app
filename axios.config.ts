/// <reference types="vite/client" />

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY, // Add the API key as a parameter here
  },
});

export default axiosInstance;
