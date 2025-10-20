import type {User} from "../../domain/user.js";

export interface IUserRepository {
    save(user: User): Promise<User>;
}