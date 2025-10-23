import { Routes, Route } from "react-router-dom";
import {Entry} from "@/pages/Entry.js";


export function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Entry/>}/>
        </Routes>
    )
}