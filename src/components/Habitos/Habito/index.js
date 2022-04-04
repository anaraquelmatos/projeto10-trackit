import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PaginaInicialHabitos from "../PaginaInicialHabitos";
import adicao from "../../../assets/img/botao-adicionar.png";
import SelecaoDias from "../SelecaoDias";
import ListaHabitos from "../ListaHabitos";
import { ThreeDots } from "react-loader-spinner";


function Habito({ dias, nome, setNome, setDias, token, frase, setCont, cont }) {

    const [estado, setEstado] = useState("inicio");
    const [habito, setHabito] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);
    const [loading, setLoading] = useState(false);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

    function criarHabito(event) {

        event.preventDefault();

        setLoading(true);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios
            .post(URL, {
                name: nome,
                days: dias
            }, config)

            .then(() => {
                setEstado("inicio");
                setHabito("");
                setDomingo(false);
                setSegunda(false);
                setTerca(false);
                setQuarta(false);
                setQuinta(false);
                setSexta(false);
                setSabado(false);
                setCont(cont + 1);
                setLoading(false);
            })
            .catch((err) => {
                alert(`Erro ${err.response}. Por favor, tente novamente!`);
                setHabilitado(false);
                setLoading(false);
            })

    }

   const tag = !loading ? (<button disable={habilitado} type="submit" className="botao-salvar">Salvar</button>) :
    (<DivLoading><ThreeDots color="#FFFFFF" width={50} /></DivLoading>)

    if (estado === "inicio") {

        return (
            <>
                <PaginaInicialHabitos click={setEstado} frase={frase} />
            </>
        );

    } else if (estado === "adicionar") {
        return (
            <Container>
                <Div>
                    <h3>Meus hábitos</h3>
                    <img src={adicao} alt="Adicionar" />
                </Div>
                <div className="habito">
                    <form onSubmit={criarHabito}>
                        <input type="text" placeholder="nome do hábito" value={habito} required onChange={(e) => {
                            setHabito(e.target.value)
                            setNome(e.target.value)
                        }} />
                        <div className="dias">
                            <SelecaoDias domingo={setDomingo} segunda={setSegunda} terca={setTerca} quarta={setQuarta}
                                quinta={setQuinta} sexta={setSexta} sabado={setSabado} estadoDomingo={domingo} estadoSegunda={segunda}
                                estadoTerca={terca} estadoQuarta={quarta} estadoQuinta={quinta} estadoSexta={sexta}
                                estadoSabado={sabado} setDias={setDias} dias={dias} />
                        </div>
                        <div className="botoes">
                            <div className="abrangencia">
                            <button disable={habilitado} onClick={() => setEstado("inicio")} className="botao-cancelar">Cancelar</button>
                            {tag}
                        </div>
                        </div>
                    </form>
                </div >
                <p className="descricao">{frase}</p>

            </Container >
        );
    } else if (estado === "reinicio") {
            return (
                <Container>
                    <PaginaInicialHabitos click={setEstado} frase={frase} />
                    <ListaHabitos token={token} frase={frase}/>
                </Container>
            );
        }

}


const Container = styled.div`

    width: 100vw;
    height: 300px;
    background: #E5E5E5;  
    color: #DBDBDB;
    font-family: 'Lexend Deca';

    .descricao{
        padding: 0 17px 0;
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

            button{
                width: 30px;
                height: 30px;
                color: #DBDBDB;
                background: #FFFFFF;
                border: 1px solid #D5D5D5;
                box-sizing: border-box;
                border-radius: 5px;
            }

            .dia.selecionado{
                background: #CFCFCF;
                color: #FFFFFF;
            }
        }

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

        .abrangencia{
            display: flex;
            justify-content: center;
            align-items: center;
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

const DivLoading = styled.div`
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;

`

export default Habito;