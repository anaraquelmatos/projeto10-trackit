import styled from "styled-components";

function TelaHoje() {
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
                </div>
            </Main>
            <Footer>
                <div className="footer">
                    <p>Hábitos</p>
                    <p>Hoje</p>
                    <p>Histórico</p>
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
    }

    .header h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;

    }

    .header img{
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
    }

    .footer p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }
`

export default TelaHoje;