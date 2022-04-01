import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";


function Login({ salvarToken }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const entrarTelaPrincipal = (event) => {

        event.preventDefault();

        setLoading(true);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;

        axios
            .post(URL, {
                email,
                password: senha
            })

            .then(response => {
                const { data } = response;
                navigate("/hoje");
                salvarToken(data.token)
                setLoading(false);

            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, confira os dados inseridos!`);
                setHabilitado(false);
                setLoading(false);
            })

    }

    return !loading ? (
        <Container>
            <form onSubmit={entrarTelaPrincipal}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <button disable={habilitado}>Entrar</button>
            </form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Container>
    ) : <Container>
        <ContainerLoading>
            <Loading>
            <BallTriangle color="#00BFFF" height={200} width={200} />
            </Loading>
        </ContainerLoading>
    </Container>;

}

export default Login;

const Container = styled.div`
width: 100%;
`
const ContainerLoading = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Loading = styled.div`
margin: 300px auto;
`