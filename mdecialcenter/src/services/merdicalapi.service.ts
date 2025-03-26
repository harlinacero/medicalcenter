import { Login } from "../models/login";
import { Session } from "../models/Session";
import { Register } from "../models/Register";

const API_URL = process.env.REACT_APP_API_URL;


class MedicalApiService {
    /**
     * Realiza una solicitud POST al endpoint Auth/login.
     * @param credentials - Objeto JSON con las credenciales de usuario.
     * @returns La respuesta del servidor en formato JSON.
     */
    async postLogin(credentials: Login): Promise<Session> {
        const response = await fetch(`${API_URL}/Auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('text/plain')) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        }

        return response.json();
    }

    /**
     * Realiza una solicitud POST al endpoint Auth/register.
     * @param credentials - Objeto JSON con las credenciales de usuario.
     * @returns La respuesta del servidor en formato JSON.
     */
    async postRegister(credentials: Register): Promise<Session> {
        const response = await fetch(`${API_URL}/Auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('text/plain')) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        }

        return response.json();
    }

    /**
     * Realiza una solicitud GET a un endpoint específico.
     * @param endpoint - El endpoint al que se realizará la solicitud.
     * @returns La respuesta del servidor en formato JSON.
     */
    async getData(endpoint: string) {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    }

    // Puedes agregar más métodos para otros endpoints aquí
}

export const medicalApiService = new MedicalApiService();