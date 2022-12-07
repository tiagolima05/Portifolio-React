import { Routes, Route } from "react-router-dom";
import Contato from "../screens/Contato";
import Home from "../screens/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}
