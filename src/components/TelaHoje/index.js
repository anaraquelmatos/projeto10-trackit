import styled from "styled-components";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";

function TelaHoje() {
    return (
        <Body>
            <Cabecalho />
            <Main>
                <div className="main">
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