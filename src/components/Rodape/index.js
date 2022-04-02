import styled from "styled-components";
import { Link } from "react-router-dom";

function Rodape() {
    return (
        <Footer>
            <div className="footer">
                <Link to={`/habitos`}>
                    <p>Hábitos</p>
                </Link>
                <Link to={`/hoje`}>
                    <p>Hoje</p>
                </Link>
                <Link to={`/historico`}>
                    <p>Histórico</p>
                </Link>
            </div>
        </Footer>
    );
}

const Footer = styled.footer`
    width: 375px;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: #FFFFFF;
    font-family: 'Lexend Deca';
    color: #52B6FF;

    .footer{
        width: 308px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            text-align: center;
            color: #52B6FF;
        }

        a:link {
            text-decoration: none;
            color: #52B6FF;
        }
        a:visited {
            text-decoration: none;
            color: #52B6FF;
        }
        a:active {
            text-decoration: none;
            color: #52B6FF;
        }
    }
`

export default Rodape;