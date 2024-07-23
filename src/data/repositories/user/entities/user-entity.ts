export interface UserEntity {
    uid?: string;
    email: string;
    password: string;
    displayName: string;
    photoURL: string;
    roles: string[]
}