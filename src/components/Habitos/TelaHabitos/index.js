import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Habito from "../Habito";
import Rodape from "../../Rodape";
import Cabecalho from "../../Cabecalho";
import ListaHabitos from "../ListaHabitos";

function TelaHabitos({ token }) {

    const [habitos, setHabitos] = useState({});
    const [nome, setNome] = useState([]);
    const [dias, setDias] = useState([]);


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
                const { data } = response;
                setHabitos(data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])

    const frase = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

    return Object.values(habitos).length === 0 ? (
        <Body>
            <Cabecalho />
            <Main>
                <Habito nome={nome} dias={dias} setNome={setNome} setDias={setDias} token={token} frase={frase} habitos={habitos}/>
            </Main>
            <Rodape />
        </Body>
    ) : (
        <Body>
            <Cabecalho />
            <Main>
                <Habito nome={nome} dias={dias} setNome={setNome} setDias={setDias} token={token}/>
                <ListaHabitos token={token}/>
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
    background: #E5E5E5; 
    font-family: 'Lexend Deca';
`
export default TelaHabitos;