import { City } from "./City";
import { Gender } from "./Gender";
import { DocumentType } from "./DocumentType";
import { Role } from "./Role";
import { CivilStatus } from "./CivilStatus";
import { Disability } from "./Disability";


export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    genderId: number;
    documentTypeId: number;
    document: string;
    birthDate: string; // `DateOnly` se representa como una cadena en TypeScript
    cityId?: number; // Campo opcional
    address: string;
    addressComplement: string;
    phone: string;
    mobilePhone: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactRelationShip: string;
    roleId: number;

    documentType: DocumentType;
    role: Role;
    gender: Gender;
    city: City;
}

export interface Patient extends User {
    civilStatusId?: number; // Campo opcional
    disabilityId?: number; // Campo opcional

    civilStatus: CivilStatus;
    disability: Disability;
}

