import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PaginaInicialHabitos from "../PaginaInicialHabitos";
import adicao from "../../assets/img/botao-adicionar.png";
import SelecaoDias from "../SelecaoDias";
import ListaHabitos from "../ListaHabitos";

function Habito({ dias, nome, setNome, setDias, token }) {

    const [estado, setEstado] = useState("inicio");
    const [habito, setHabito] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

    function criarHabito(event) {

        event.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios
            .post(URL, {
                name: nome,
                days: dias
            }, config)

            .then(() => {
                setEstado("reiniciar")
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, tente novamente!`);
                setHabilitado(false);
            })

    }

    if (estado === "inicio") {

        return (
            <PaginaInicialHabitos click={setEstado} />
        );

    } else if (estado === "adicionar") {
        return (
            <Container>
                <Div>
                    <h3>Meus hábitos</h3>
                    <img src={adicao} alt="Adicionar" />
                </Div>
                <div className="habito">
                    <form onSubmit={criarHabito}>
                        <input type="text" placeholder="nome do hábito" value={habito} required onChange={(e) => {
                            setHabito(e.target.value)
                            setNome(e.target.value)
                        }} />
                        <div className="dias">
                            <SelecaoDias domingo={setDomingo} segunda={setSegunda} terca={setTerca} quarta={setQuarta}
                                quinta={setQuinta} sexta={setSexta} sabado={setSabado} estadoDomingo={domingo} estadoSegunda={segunda}
                                estadoTerca={terca} estadoQuarta={quarta} estadoQuinta={quinta} estadoSexta={sexta}
                                estadoSabado={sabado} setDias={setDias} dias={dias} />
                        </div>
                        <div className="botoes">
                            <button disable={habilitado} className="botao-cancelar">Cancelar</button>
                            <button disable={habilitado} type="submit" className="botao-salvar">Salvar</button>
                        </div>
                    </form>
                </div >
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Container >
        );
    } else if (estado === "reiniciar") {
        return (
            <Container>
                <Div>
                    <h3>Meus hábitos</h3>
                    <img src={adicao} alt="Adicionar" />
                </Div>
                <ListaHabitos token={token}/>
            </Container >
        );
    }
}

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background: #E5E5E5;  
    font-family: 'Lexend Deca';

    p{
        padding: 0 17px 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

    .habito{
        width: 340px;
        height: 180px;
        margin: 0px auto 29px;
        background: #FFFFFF;
        border-radius: 5px;

        input{
            width: 303px;
            height: 45px;
            margin: 18px 0 8px 19px;
            padding-left: 11px;
            background: #FFFFFF;
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

        .dias{
            width: 234px;
            heigth: 30px;
            margin: 0 0 0 19px;

            p{
                padding: 3px 8px;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                box-sizing: border-box;
                border-radius: 5px;
                font-style: normal;
                color: #DBDBDB;
            }

            .dia.selecionado{
                background: #CFCFCF;
                color: #FFFFFF;
            }
        }

    }

    .botoes{
        width: 176px;
        heigth: 35px;
        margin: 30px 16px 15px 155px;

        .botao-cancelar{
            width: 84px;
            height: 35px;
            border: none;
            background: #FFFFFF;
            border-radius: 4.63636px;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #52B6FF;
        }

        .botao-salvar{
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            border-radius: 4.63636px;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #FFFFFF;
        }

    }
}

`

const Div = styled.div`

    width: 339px;
    height: 35px;
    margin: 22px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    img{
        width: 40px;
        height: 35px;
        border-radius: 4.63636px;
    }
`

export default Habito;