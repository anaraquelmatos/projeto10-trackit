import styled from "styled-components";

function Listagem({ nome, dias }) {
    return (
        <Lista>
            <h6>{nome}</h6>
            <div className="lista">
            <p>{dias}</p>
            </div>
        </Lista>
    );
}

const Lista = styled.div`
    width: 340px;
    height: 91px;
    margin: 17px auto;
    background: #FFFFFF;
    border-radius: 5px;

    h6{
        padding-left: 16px;
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

    p{
        padding: 3px 8px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-style: normal;
        color: #DBDBDB;
    }

    .dia.selecionado{
        background: #CFCFCF;
        color: #FFFFFF;
    }
}
`

export default Listagem;