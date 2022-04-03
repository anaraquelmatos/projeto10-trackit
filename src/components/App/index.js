import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";
import Cadastro from "../Cadastro";
import TelaHoje from "../TelaHoje";
import TelaHabitos from "../../components/Habitos/TelaHabitos";
import UserContext from "../UserContext";


function App() {

    const [token, setToken] = useState(null);
    const [img, setImg] = useState([]);

    return (
        <UserContext.Provider value={{img, setImg}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login salvarToken={(token) => setToken(token)} />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/hoje" element={<TelaHoje token={token} />} />
                    <Route path="/habitos" element={<TelaHabitos token={token} />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}


export default App;