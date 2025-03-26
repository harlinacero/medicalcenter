
import { Session } from "../models/Session";
import { Patient } from "../models/User";
import { authService } from "./authService";

class PatientApiService {

    /**
     * Realiza una solicitud POST al endpoint Patient/register.
     * @param patientData - Objeto JSON con los datos del paciente.
     * @returns La respuesta del servidor en formato JSON.
     */
    async postRegister(patientData: Patient): Promise<Session> {

        const response = await authService.post('/Patient', patientData);

        if (response.status < 200 || response.status >= 300) {
            const contentType = response.headers['content-type'];
            if (contentType && contentType.includes('text/plain')) {
                const errorMessage = response.data;
                throw new Error(errorMessage as string);
            } else {
                throw new Error(`Error: ${response.statusText || response.status}`);
            }
        }

        return response.data as Session;
    }

    async updatePatiente(patientData: Patient): Promise<Patient> {

        const response = await authService.put('/Patient', patientData);

        if (response.status < 200 || response.status >= 300) {
            const contentType = response.headers['content-type'];
            if (contentType && contentType.includes('text/plain')) {
                const errorMessage = response.data;
                throw new Error(errorMessage as string);
            } else {
                throw new Error(`Error: ${response.statusText || response.status}`);
            }
        }

        return response.data as Patient;
    }

    async getPatient(userId: number | undefined) {
        const response = await authService.get(`/Patient/${userId}`);
        return response.data as Patient;
    }
}

export const patientService = new PatientApiService();