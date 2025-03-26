import { Role } from "./Role";


export interface Session {
    token: string;
    userId: number;
    userName: string;
    firstName: string;
    lastName: string;
    roleId: number;
    roleName: string;
    role: Role;
}
