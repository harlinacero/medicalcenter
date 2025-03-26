import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { localStorageUtil } from '../../utils/localStorageUtil';

interface PrivateRouteProps {
    children: JSX.Element;
    allowedRoles: string[]; // Lista de roles permitidos
}

export default function PrivateRoute({ children, allowedRoles }: PrivateRouteProps) {
    const sessionData = localStorageUtil.getToken();
    

    if (!sessionData) {
        // Si no hay token, redirige al login
        return <Navigate to="/login" />;
    }

    try {

        // Verifica si el rol del usuario está permitido
        if (!allowedRoles.includes(sessionData.roleName.toLowerCase())) {
            return <Navigate to="/unauthorized" />; // Redirige a una página de acceso denegado
        }

        return children; // Renderiza el componente hijo si todo está bien
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        return <Navigate to="/login" />; // Redirige al login si el token es inválido
    }
}