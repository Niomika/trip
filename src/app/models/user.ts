import { Role } from './role';

export interface User {
    uid: string;
    email: string;
    role: Role;
}
