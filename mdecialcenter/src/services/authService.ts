import axios from "axios";
import { localStorageUtil } from "../utils/localStorageUtil";

// Configura una instancia de Axios
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Asegúrate de configurar esta variable en tu archivo .env
    timeout: 10000, // Tiempo de espera opcional
});

// Interceptor para agregar el token a las solicitudes
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorageUtil.getTokenUncode();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar respuestas y errores
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manejo de errores global (opcional)
        if (error.response?.status === 401) {
            console.error("No autorizado. Redirigiendo al login...");
            window.location.href = "/login"; // Redirige al login si el token es inválido
        }
        return Promise.reject(error);
    }
);

export const authService = apiClient;