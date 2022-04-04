import styled from "styled-components";
import lixeira from "../../../assets/img/lixeira.svg";
import axios from "axios";

function Listagem({ nome, dias, id, token, setHabitos, habitos, setCont }) {


    function excluirHabito(id) {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const exclusao = window.confirm("Você tem certeza que deseja excluir este hábito?")

        if (exclusao === true) {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

            axios
                .delete(URL, config)
                .then(() => {
                    setCont(id)
                })
            setHabitos(habitos.filter(habito => habito.id !== id))

        }
    }

    const fundo = "#CFCFCF";
    const cor = "#FFFFFF";

    return (
        <Lista>
            <div className="parteSuperior">
                <h6>{nome}</h6>
                <img src={lixeira} alt="Lixeira" onClick={() => excluirHabito(id)} />
            </div>
            <div className="lista">
                <div className="programacao">
                    <Button fundo={dias.includes(0) ? fundo : "#FFFFFF"} cor={dias.includes(0) ? cor : "#DBDBDB"}>D</Button>
                    <Button fundo={dias.includes(1) ? fundo : "#FFFFFF"} cor={dias.includes(1) ? cor : "#DBDBDB"}>S</Button>
                    <Button fundo={dias.includes(2) ? fundo : "#FFFFFF"} cor={dias.includes(2) ? cor : "#DBDBDB"}>T</Button>
                    <Button fundo={dias.includes(3) ? fundo : "#FFFFFF"} cor={dias.includes(3) ? cor : "#DBDBDB"}>Q</Button>
                    <Button fundo={dias.includes(4) ? fundo : "#FFFFFF"} cor={dias.includes(4) ? cor : "#DBDBDB"}>Q</Button>
                    <Button fundo={dias.includes(5) ? fundo : "#FFFFFF"} cor={dias.includes(5) ? cor : "#DBDBDB"}>S</Button>
                    <Button fundo={dias.includes(6) ? fundo : "#FFFFFF"} cor={dias.includes(6) ? cor : "#DBDBDB"}>S</Button>
                </div>
            </div>
        </Lista>
    );
}


const Lista = styled.div`
    width: 340px;
    height: 91px;
    margin: 0 auto 10px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';

    .parteSuperior{
        width: 310px;
        margin-left: 15px;
        display: flex;
        justify-content: space-between;
    }

    h6{
        padding: 13px 0 0 0;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    .lista{
        width: 234px;
        heigth: 30px;
        margin: 0 0 0 19px;

        .programacao{
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
`

const Button = styled.button`
    background: ${props => props.fundo};
    color: ${props => props.cor};
`

export default Listagem;