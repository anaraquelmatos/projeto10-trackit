import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../Cadastro";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;