import styled from "styled-components";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";

function TelaHoje({ token }) {

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const [hoje, setHoje] = useState({});

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
            })
            .catch((err) => {
                console.log(err.response);
            })

    }, [])

    return (
        <Body>
            <Cabecalho />
            <Main>
                <div className="main">
                    {days.map(day => {
                        if (days.indexOf(day) == dayjs().day()) {
                            return (
                                <p>{day}, {dayjs().format('DD/MM')}</p>
                            )
                        }
                    })}
                </div>
            </Main>
            <Rodape />
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