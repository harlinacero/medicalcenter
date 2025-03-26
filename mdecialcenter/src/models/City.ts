import { Department } from "./Department";


export interface City {
    id: number;
    name: string;
    departmentId: number;

    department: Department;
}
