import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import logoGrande from "../../assets/img/logo-grande.png";
import { useContext } from "react";
import UserContext from "../UserContext";

function Login({ salvarToken }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setImg } = useContext(UserContext);

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
                setImg(data.image);

            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, confira os dados inseridos!`);
                setHabilitado(false);
                setLoading(false);
            })

    }

    return !loading ? (
        <Div>
            <div className="parteSuperior">
                <img src={logoGrande} alt="TrackIt" />
                <h1 className="titulo">TrackIt</h1>
            </div>
            <Form onSubmit={entrarTelaPrincipal}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <button disable={habilitado}>Entrar</button>
            </Form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Div>
    ) : (

        <Div>
            <div className="parteSuperior">
                <img src={logoGrande} alt="TrackIt" />
                <h1 className="titulo">TrackIt</h1>
            </div>
            <Form onSubmit={entrarTelaPrincipal}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <DivLoading>
                    <ThreeDots color="#FFFFFF" width={50} />
                </DivLoading>
            </Form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Div>
    );

}

const Div = styled.div`
    width: 303px;
    margin: 68px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    
    p {
        margin-top: 36px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    
    p:link {
        text-decoration-line: underline;
        color: #52B6FF;
    }
    p:visited {
        text-decoration-line: underline;
        color: #52B6FF;
    }
    p:active {
        text-decoration-line: underline;
        color: #52B6FF;
    }

    .parteSuperior{
        width: 186px;
        margin-bottom: 33px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img{
            width: 155px;
            height: 90px;
        }

        .titulo{
            font-family: 'Playball';
            font-style: normal;
            font-weight: 400;
            font-size: 68.982px;
            line-height: 86px;
            text-align: center;
            color: #126BA5;
        }
    }
`
const Form = styled.form`
        width: 303px;
        height: 150px;

    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 11px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
    }
    
    input::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button{
        width: 303px;
        height: 45px;
        border:none;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
`

const DivLoading = styled.div`
    width: 303px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52B6FF;
    opacity: 0.7;
    border-radius: 4.63636px;

`

export default Login;