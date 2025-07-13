import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BACKEND_URL } from '../config/sectrets';

// This file contains the API client configuration using Axios
// It sets the base URL, timeout, and request interceptors for adding authentication tokens
const apiClient: AxiosInstance = axios.create({
    baseURL: BACKEND_URL, // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS for all origins
    },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the Authorization header
    }
    return config;
});

export default apiClient;


