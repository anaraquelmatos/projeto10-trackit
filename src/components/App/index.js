import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";
import Cadastro from "../Cadastro";
import TelaHoje from "../TelaHoje";
import TelaHabitos from "../../components/Habitos/TelaHabitos";
import UserContext from "../UserContext";
import TelaHistorico from "../TelaHistorico";


function App() {

    const [token, setToken] = useState(null);
    const [img, setImg] = useState([]);
    const [porcentagem, setPorcentagem] = useState([]);

    return (
        <UserContext.Provider value={{img, setImg, porcentagem, setPorcentagem}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login salvarToken={(token) => setToken(token)} />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/hoje" element={<TelaHoje token={token} />} />
                    <Route path="/habitos" element={<TelaHabitos token={token} />} />
                    <Route path="/historico" element={<TelaHistorico token={token} />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}


export default App;