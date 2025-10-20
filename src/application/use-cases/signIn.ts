import {requireFields, type User} from "../../domain/user.js";
import {useUser} from "../../services/user/userAdapter.js";


export function useSignIn(){

    const userRepository = useUser();

    async function signIn(user: User) {

        const mandatoryFields = requireFields(user);

        try {
            await userRepository.save(user);
            return { success: true, message: "Usuário cadastrado com sucesso!" };
        } catch (error: any) {
            return { success: false, message: "Erro ao salvar usuário.", error: error.message };
        }
    }

    return { signIn }
}

