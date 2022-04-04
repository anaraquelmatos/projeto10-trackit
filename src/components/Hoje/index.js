import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Hoje({ nome, recorde, sequencia, token, id, feito }) {

    const [dia, setDia] = useState(false);

    const selecao = `dia ${dia ? "selecionado" : ""}`;

    const corSequencia = "#8FC549";

    const corRecorde = "#8FC549";

    const fundo = "#8FC549";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }


    function enviarDadosHoje() {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

        axios
            .post(URL, {}, config)

            .then(() => {
                console.log("deu certo");
            })
            .catch((err) => {
                alert(`Erro ${err.response}. Por favor, tente novamente!`);
            })

    }

    function desmarcarDadosHoje() {

        const URL2 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

        axios
            .post(URL2, {}, config)

            .then(() => {
                console.log("deu muito certo");
            })
            .catch((err) => {
                alert(`Erro ${err.response}. Por favor, tente novamente!`);
            })

    }


    function verificarValor() {

        setDia(!dia)
        if (!dia) {
            enviarDadosHoje();
        } else {
            desmarcarDadosHoje();
        }

    }


    return (
        <Div>
            <Check className={selecao} onClick={() => {
                verificarValor();
            }}>
                <p className="nome">{nome}</p>
                <Sequencia corSequencia={!dia && sequencia !== 0 ? corSequencia : "#666666"} className="info">
                    {sequencia}</Sequencia>
                <Recorde corRecorde={recorde !== 0 && recorde === sequencia ? corRecorde : "#666666"} className="info">{recorde}</Recorde>
            </Check>
        </Div>
    );
}

const Div = styled.div` 

    background: #EBEBEB;

    .dia.selecionado{
        background:  #8FC549;
    }

    .dia.marcado{
        background: #EBEBEB;
    }
`

const Sequencia = styled.p`
    color: ${props => props.corSequencia};
`
const Recorde = styled.p`
    color: ${props => props.corRecorde};
`
const Check = styled.div`
    background: ${props => props.fundo};
`

export default Hoje;