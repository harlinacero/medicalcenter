export interface AppoimentsProps {
    id: number;
    date: string;
    time: string;
    doctor: string;
    location: string;
    specialty: string;
    status: AppoimentsStatus;
}

export enum AppoimentsStatus {
    PENDING = "Pendiente",
    CONFIRMED = "Confirmada",
    CANCELLED = "Cancelada",
    COMPLETED = "Completada"
}