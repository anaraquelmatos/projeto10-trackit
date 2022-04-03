import styled from "styled-components";

function Cabecalho() {
    return (
        <Header>
            <div className="header">
                <h1>TrackIt</h1>
                <img src="https://www.seekpng.com/png/detail/47-473309_care-bears-and-cousins-clip-art-best-friend.png" alt="imagem" />
            </div>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
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

export default Cabecalho;