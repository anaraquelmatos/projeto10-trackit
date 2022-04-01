import { Link } from "react-router-dom";
import styled from "styled-components";
import adicao from "../../assets/img/botao-adicionar.png"

function TelaHabitos() {
    return (
        <Body>
            <Header>
                <div className="header">
                    <h1>TrackIt</h1>
                    <img src="https://www.seekpng.com/png/detail/47-473309_care-bears-and-cousins-clip-art-best-friend.png" alt="imagem" />
                </div>
            </Header>
            <Main>
                <div className="main">
                    <h3>Meus hábitos</h3>
                    <img src={adicao} alt="Adicionar" />
                </div>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Main>
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
        </Body>
    );

}

const Body = styled.body`
    background: #E5E5E5;  
`

const Header = styled.header`
    width: 375px;
    height: 70px;
    position: fixed:
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    .header{
        width: 339px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        h1{
            font-family: 'Playball';
            font-style: normal;
            font-weight: 400;
            font-size: 38.982px;
            line-height: 49px;
            color: #FFFFFF;
        }

         img{
            width: 51px;
            height: 51px;
            border-radius: 98.5px;
        }
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

    p{
        padding: 0 17px 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

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

export default TelaHabitos;