import axios, { AxiosInstance } from 'axios';
import { ENV } from '@/config/enviroments';

export const STRAPI_API: AxiosInstance = axios.create({
    baseURL: ENV.BACKEND_API_URL,
});
