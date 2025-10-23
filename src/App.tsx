import {useSignIn} from "./application/use-cases/signIn.js";
import {type FormEvent, useState} from "react";
import type {User} from "./domain/user.js";
import {PublicRoutes} from "@/routes/PublicRoutes.js";
import {AuthProvider} from "@/context/AuthContext.js";
import AppRoutes from "@/routes/AppRoutes.js";

function App() {
    return (
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>

    )

    // const [user, setUser] = useState<User>({id: "", email: "", password: ""});
    // const { signIn } = useSignIn();
    //
    //
    // async function handleSubmit(e: FormEvent) {
    //     e.preventDefault();
    //
    //     if (!user.email || !user.password) {
    //         alert("Por favor, preencha email e senha.");
    //         return;
    //     }
    //
    //     const result = await signIn(user);
    //
    //     if (result.success) {
    //         alert(result.message);
    //     } else {
    //         alert("Erro: " + result.error);
    //     }
    //
    // }
    //
    // return (
    //     <section>
    //         <h2>Checkout</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Email:</label>
    //                 <input
    //                     type="email"
    //                     value={user.email}
    //                     onChange={(e) =>
    //                         setUser((prev) => ({ ...prev, email: e.target.value }))
    //                     }
    //                 />
    //             </div>
    //
    //             <div>
    //                 <label>Senha:</label>
    //                 <input
    //                     type="password"
    //                     value={user.password}
    //                     onChange={(e) =>
    //                         setUser((prev) => ({ ...prev, password: e.target.value }))
    //                     }
    //                 />
    //             </div>
    //
    //             <button type="submit">Entrar</button>
    //         </form>
    //     </section>
    // );
}

export default App;