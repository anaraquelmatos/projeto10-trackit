import { useState } from "react";
import axios from "axios";

function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function enviarCadastro(event) {

        event.preventDefault();

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;

        const promise = axios.post(URL, {
            email,
            name: nome,
            image: foto,
            password: senha
        })

        promise.then(response => {
            const { data } = response;
            console.log(data);
        })
    }

    return (
        <>
            <form onSubmit={enviarCadastro}>
                <input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <input type="text" placeholder="nome" value={nome} required onChange={(e) => setNome(e.target.value)}></input>
                <input type="url" placeholder="foto" value={foto} required onChange={(e) => setFoto(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </form>
            <a>Já tem uma conta? Faça login!</a>
        </>
    );
}

export default Cadastro;