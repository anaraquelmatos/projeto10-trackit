import adicao from "../../../assets/img/botao-adicionar.png";
import styled from "styled-components";

function PaginaInicialHabitos({ click, frase}) {

        return (
            <Container>
                <Div>
                    <h3>Meus hábitos</h3>
                    <img src={adicao} onClick={() => click("adicionar")} alt="Adicionar" />
                </Div>
                <p className="frase">
                    {frase}
                </p>
            </Container>
        );
    }

const Container = styled.div`

font-family: 'Lexend Deca';

    .frase{
        padding: 0 17px 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

.habito{
    width: 340px;
    height: 180px;
    margin: 0px auto 29px;
    background: #FFFFFF;
    border-radius: 5px;

    input{
        width: 303px;
        height: 45px;
        margin: 18px 0 8px 19px;
        padding-left: 11px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
    }

    input::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .dias{
        width: 234px;
        heigth: 30px;
        margin: 0 0 0 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        
    }

    .botoes{
        width: 176px;
        heigth: 35px;
        margin: 30px 16px 15px 155px;

        .botao-cancelar{
            width: 84px;
            height: 35px;
            border: none;
            background: #FFFFFF;
            border-radius: 4.63636px;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #52B6FF;
        }

        .botao-salvar{
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            border-radius: 4.63636px;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #FFFFFF;
        }

    }
}

`

const Div = styled.div`

    width: 339px;
    height: 35px;
    margin: 22px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    img{
        width: 40px;
        height: 35px;
        border-radius: 4.63636px;
    }
`
export default PaginaInicialHabitos;