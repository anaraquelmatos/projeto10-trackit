import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login({ salvarToken }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [habilitado, setHabilitado] = useState(false);

    const navigate = useNavigate();

    const entrarTelaPrincipal = (event) => {

        event.preventDefault();

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;

        axios
            .post(URL, {
                email,
                password: senha
            })

            .then(response => {
                const { data } = response;
                console.log(data);
                navigate("/habitos");
                salvarToken(data.token)
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, confira os dados inseridos!`);
                setHabilitado(false);
            })

    }

    return (
        <>
            <form onSubmit={entrarTelaPrincipal}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <button>Entrar</button>
            </form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </>
    );
}

export default Login;