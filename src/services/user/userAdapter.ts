const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;



import type {IUserRepository} from "../../application/repositories/userRepository.js";
import type {User} from "../../domain/user.js";


export function useUser() : IUserRepository {
    return {
        async save(user: User): Promise<User> {
            const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey" : SUPABASE_ANON_KEY,
                },
                body: JSON.stringify(user),
            })

            return response.json();
        },
    }

}