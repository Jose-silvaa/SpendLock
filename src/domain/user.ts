
export type User = {
    id: UniqueId;
    email: Email;
    password: Password;
}

export function requireFields(user: User): boolean {
    return user.email != null;
}