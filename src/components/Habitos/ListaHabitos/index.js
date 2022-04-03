import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Listagem from "../Listagem";


function ListaHabitos({ token }) {

    const [habitos, setHabitos] = useState([]);

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

    
    return (
        <Cadastro>
            {
                habitos.map((habito) => {
                    return (
                        <Listagem key={habito.id} nome={habito.name} dias={habito.days} token={token} id={habito.id} 
                        habitos={habitos} setHabitos={setHabitos}
                        />
                    );
                })
            }
        </Cadastro>
    );
}

const Cadastro = styled.div`
    width: 100vw;
    heigth: 100vh;
    background: #E5E5E5;
    font-family: 'Lexend Deca';

    .programacao button{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-style: normal;
    }
`

export default ListaHabitos;