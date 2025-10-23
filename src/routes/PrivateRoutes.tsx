import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "@/context/AuthContext.js";

export default function PrivateRoutes() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to="/login" />;
}
