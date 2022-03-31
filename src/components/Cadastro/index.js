import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const navigate = useNavigate();


    const enviarCadastro = (event) => {

        event.preventDefault();
        
        setHabilitado(true);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;

        axios
            .post(URL, {
                email,
                name: nome,
                image: foto,
                password: senha
            })

            .then(() => {
                navigate("/");
            })

            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, tente novamente!`);
                setHabilitado(false);
            });
    }

    return (
        <>
            <form onSubmit={enviarCadastro}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <input type="text" placeholder="nome" disable={habilitado} value={nome} required onChange={(e) => setNome(e.target.value)}></input>
                <input type="url" placeholder="foto" disable={habilitado} value={foto} required onChange={(e) => setFoto(e.target.value)}></input>
                <button type="submit" disable={habilitado}>Cadastrar</button>
            </form>
            <Link to={`/`}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </>
    );
}

export default Cadastro;