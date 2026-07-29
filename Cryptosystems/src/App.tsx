import { HomePage } from "./Cryptographic Algorithms/MainPage/homepage";
import { Routes, Route } from "react-router";
import './CSS files/main.css'
import { AES } from "./Cryptographic Algorithms/AES/AES";
import { RSA } from "./Cryptographic Algorithms/RSA Algorithm/RSA";
import { Elgamal } from "./Cryptographic Algorithms/Elgamal CryptoSystem/Elgamal";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="AES" element={<AES />} />
                <Route path="RSA" element={<RSA />} />
                <Route path="Elgamal" element={<Elgamal />} />
            </Routes>
        </>
    )
}

export default App;
