import styled from "styled-components";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";


function TelaHistoricos({ token }) {

    return (
        <Body>
            <Cabecalho token={token} />
            <Main>
                <Container>
                    <Div>
                        <h3>Histórico</h3>
                        <p className="frase">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                    </Div>
                </Container>
            </Main>
            <Rodape token={token} />
        </Body>
    );

}

const Container = styled.div`

font-family: 'Lexend Deca';

    .frase{
        padding: 29px 0 0;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }


 `

const Body = styled.body`
    background: #E5E5E5; 
    font-family: 'Lexend Deca';
`

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    margin-bottom: 70px;

`

const Div = styled.div`

    width: 339px;
    height: 35px;
    margin: 28px auto 0px;


    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`


export default TelaHistoricos;