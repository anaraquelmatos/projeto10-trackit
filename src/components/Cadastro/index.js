import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logoGrande from "../../assets/img/logo-grande.png";
import { ThreeDots } from "react-loader-spinner";


function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const enviarCadastro = (event) => {

        event.preventDefault();
        setLoading(true);

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
                setLoading(false);
            })

            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, tente novamente!`);
                setHabilitado(false);
                setLoading(false);
            });
    }

    return !loading ? (
        <Div>
            <div className="parteSuperior">
            <img src={logoGrande} alt="TrackIt"/>
            <h1 className="titulo">TrackIt</h1>
            </div>
            <Form onSubmit={enviarCadastro}>
                <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
                <input type="text" placeholder="nome" disable={habilitado} value={nome} required onChange={(e) => setNome(e.target.value)}></input>
                <input type="url" placeholder="foto" disable={habilitado} value={foto} required onChange={(e) => setFoto(e.target.value)}></input>
                <button type="submit" disable={habilitado}>Cadastrar</button>
            </Form>
            <Link to={`/`}>
                <p className="login">Já tem uma conta? Faça login!</p>
            </Link>
        </Div>
    ):(
        <Div>
        <div className="parteSuperior">
        <img src={logoGrande} alt="TrackIt"/>
        <h1 className="titulo">TrackIt</h1>
        </div>
        <Form onSubmit={enviarCadastro}>
            <input type="email" placeholder="email" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="senha" disable={habilitado} value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
            <input type="text" placeholder="nome" disable={habilitado} value={nome} required onChange={(e) => setNome(e.target.value)}></input>
            <input type="url" placeholder="foto" disable={habilitado} value={foto} required onChange={(e) => setFoto(e.target.value)}></input>
            <DivLoading>
                    <ThreeDots color="#FFFFFF" width={50} />
                </DivLoading>
        </Form>
        <Link to={`/`}>
            <p className="login">Já tem uma conta? Faça login!</p>
        </Link>
    </Div>
    )
}

const Div = styled.div`
    width: 303px;
    margin: 68px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;

    .login {
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
        height: 249px;

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

`

export default Cadastro;