import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";
import Cadastro from "../Cadastro";
import TelaHabitos from "../TelaHabitos";


function App() {

    const [token, setToken] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login salvarToken={(token) => setToken(token)}/>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/hoje" element={<TelaHabitos token={token}/>} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;