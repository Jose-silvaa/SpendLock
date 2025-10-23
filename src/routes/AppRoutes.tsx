import { BrowserRouter as Router } from "react-router-dom";
import {PublicRoutes} from "@/routes/PublicRoutes.js";


export default function AppRoutes() {
    return (
        <Router>
            <PublicRoutes />
        </Router>
    );
}
