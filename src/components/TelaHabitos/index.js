import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Habito from "../Habito";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";

function TelaHabitos({ token }) {

    const [habitos, setHabitos] = useState({});

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
        axios
            .get(URL, config)
            .then((response) => {
                const { data } = response
                console.log(data)
                setHabitos(data)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])


    return Object.values(habitos).length === 0 ? (
        <Body>
            <Cabecalho />
            <Main>
                <Habito />
            </Main>
            <Rodape />
        </Body>
    ) : <p>Tem conteúdo</p>;

}

const Body = styled.body`
    background: #E5E5E5;  
`

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend Deca';
`
export default TelaHabitos;