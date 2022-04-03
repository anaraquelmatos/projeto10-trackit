import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Listagem from "../Listagem";

function ListaHabitos({ token }) {

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
                const { data } = response;
                setHabitos(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])

    return Object.values(habitos).length > 0 ? (
        <Cadastro>
            {
                habitos.map((habito) => {
                    return (
                        <Listagem key={habito.id} nome={habito.name} dias={habito.days}
                        />
                    );
                })
            }
        </Cadastro>
    ) : <p>Carregando</p>;
}

const Cadastro = styled.div`
    width: 100vw;
    heigth: 100vh; 
    background: #E5E5E5;
`

export default ListaHabitos;