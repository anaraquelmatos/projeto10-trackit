import styled from "styled-components";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";
import Hoje from "../Hoje";
import { useContext } from "react";
import UserContext from "../UserContext";

function TelaHoje({ token }) {

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const [hoje, setHoje] = useState([]);
    const [cont, setCont] = useState(0);
    const { setPorcentagem, porcentagem } = useContext(UserContext);
    
    const resultado = `${porcentagem === 0 ? `Nenhum hábito concluído ainda` : `${porcentagem}% dos hábitos concluídos`}`;


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
        axios
            .get(URL, config)
            .then((response) => {
                const { data } = response;
                setHoje(data); 
                setPorcentagem(((data.filter((per) => per.done).length) / data.length) * 100);
            })

    }, [token, cont])

    return (
        <Body>
            <Cabecalho token={token} />
            <Main>
                <div className="data">
                    {
                        days.map(day => {
                            if (days.indexOf(day) == dayjs().day()) {
                                return (

                                    <p className="formato">{day}, {dayjs().format('DD/MM')}</p>
                                )
                            }
                        })
                    }
                    <div>
                    </div>
                <Span span={porcentagem}>{resultado}</Span>
                </div>
                <div className="habitosLista">
                    {
                        hoje.map(item => {
                            return (

                           <Hoje key={item.id} id={item.id} nome={item.name} recorde={item.highestSequence} 
                           sequencia={item.currentSequence} token={token} item={item} cont={cont} 
                           setCont={setCont}/>   
                            )
                        })
                    }
                </div>
            </Main>
            <Rodape token={token} />
        </Body>
    );

}

const Span = styled.span`
    color: ${({span}) =>  {
        return span === 0 ? "#BABABA" : "#8FC549"
    }};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

`

const Body = styled.body`
    background: #E5E5E5; 
    font-family: 'Lexend Deca';
`

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    margin-bottom: 70px;

    .data{
        width: 339px;
        margin: 28px auto;

        .formato{
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
    }

    .habitosLista{
        width: 340px;
        margin: 0 auto;
    }
`


export default TelaHoje;