import styled from "styled-components";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";
import Hoje from "../Hoje";

function TelaHoje({ token }) {

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const [hoje, setHoje] = useState([]);
    const [cont, setCont] = useState(0);

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
                setCont(cont + 1);
            })
            .catch((err) => {
                console.log(err.response);
            })

    }, [cont])

    return (
        <Body>
            <Cabecalho token={token} />
            <Main>
                <div className="main">
                    {
                        days.map(day => {
                            if (days.indexOf(day) == dayjs().day()) {
                                return (
                                    <p>{day}, {dayjs().format('DD/MM')}</p>
                                )
                            }
                        })
                    }
                </div>
                <div>
                    {
                        hoje.map(dia => {
                            return (

                           <Hoje key={dia.id} id={dia.id} nome={dia.name} recorde={dia.highestSequence} 
                           sequencia={dia.currentSequence} token={token} feito={dia.done}/> 
                           
                            )
                        })
                    }
                </div>
            </Main>
            <Rodape token={token} />
        </Body>
    );

}

const Body = styled.body`
    background: #E5E5E5;  
`

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend Deca';

    .main{
        width: 339px;
        height: 35px;
        margin: 22px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default TelaHoje;