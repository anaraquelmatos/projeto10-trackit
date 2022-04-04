import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import check from "../../assets/img/check.svg";
import { useContext } from "react";
import UserContext from "../UserContext";


function Hoje({ nome, recorde, sequencia, token, id, item, cont, setCont }) {

    const [dia, setDia] = useState(false);

    const corSequencia = "#8FC549";

    const corRecorde = "#8FC549";

    const fundo = "#8FC549";

    const atualizaçãoRecorde = `Seu recorde: ${recorde > 1 ? `${recorde} dias` : `${recorde} dia`}`;

    const atualizaçãoSequencia = `Sequência atual: ${sequencia > 1 ? `${sequencia} dias` : `${sequencia} dia`}`;

    let variavel = 0;

    let array = [];

    const { setPorcentagem, porcentagem } = useContext(UserContext);


    function enviarDadosHoje(done, id) {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }


        if (done) {

            axios

                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
                .then(() => {
                    setCont(cont + 1);
                })

        } else {

            axios

                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
                .then(() => {
                    setCont(cont + 1);
                })
        }

    }


    return (
        <Container>
            <div className="conteudo">
                <div>
                    <p className="nome">{nome}</p>
                    <Sequencia corSequencia={!dia && sequencia !== 0 ? corSequencia : "#666666"}>
                        {atualizaçãoSequencia}</Sequencia>

                    <Recorde corRecorde={recorde !== 0 && recorde === sequencia ? corRecorde : "#666666"}>
                        {atualizaçãoRecorde}</Recorde>
                </div>
                <Check fundo={item.done ? fundo : "#EBEBEB"}
                    onClick={() => {
                        enviarDadosHoje(item.done, id);

                    }}>
                    <img src={check} alt="Check" />
                </Check>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    heigth: 100%;
    height: 94px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 5px;

    .conteudo{
        width: 312px;
        height: 94px;
        margin: 13px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dia.selecionado{
        background:  #8FC549;
    }

    .dia.marcado{
        background: #EBEBEB;
    }

    .nome{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`

const Sequencia = styled.p`
    color: ${props => props.corSequencia};
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
`
const Recorde = styled.p`
    color: ${props => props.corRecorde};
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
`
const Check = styled.div`
    background: ${props => props.fundo};
    width: 69px;
    height: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 35.09px;
        heigth: 28px;
    }
`

export default Hoje;