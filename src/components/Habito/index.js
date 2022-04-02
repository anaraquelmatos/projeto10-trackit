import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import adicao from "../../assets/img/botao-adicionar.png";

function Habito({ dias, nome, setNome, setDias, token }) {

    const [estado, setEstado] = useState("inicio");
    const [habito, setHabito] = useState("");
    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);
    const diaDomingo = `dia ${domingo ? "selecionado" : ""}`;
    const diaSegunda = `dia ${segunda ? "selecionado" : ""}`;
    const diaTerca = `dia ${terca ? "selecionado" : ""}`;
    const diaQuarta = `dia ${quarta ? "selecionado" : ""}`;
    const diaQuinta = `dia ${quinta ? "selecionado" : ""}`;
    const diaSexta = `dia ${sexta ? "selecionado" : ""}`;
    const diaSabado = `dia ${sabado ? "selecionado" : ""}`;

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

    function criarHabito(event) {

        event.preventDefault();

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

            .then(response => {
                const { data } = response;
                console.log("mandei");
                console.log(data);

            })
            .catch((err) => {
                console.log(err.response);
            })

    }

    if (estado === "inicio") {
        return (
            <Container>
                <Div>
                    <h3>Meus hábitos</h3>
                    <img onClick={() => setEstado("adicionar")} src={adicao} alt="Adicionar" />
                </Div>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Container>
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
                            setNome(habito)
                        }} />
                        <div className="dias">
                            <p className={diaDomingo} onClick={() => {
                                setDomingo(!domingo)
                                let array = [...dias];
                                let index = array.indexOf(1);

                                if (!domingo) {

                                    setDias([...dias, 1]);

                                } else if (index > -1) {

                                    array.splice(index, 1);
                                    setDias(array);
                                }
                            }}>D</p>
                            <p className={diaSegunda} onClick={() => {
                                setSegunda(!segunda)
                                let array = [...dias];
                                let index = array.indexOf(2);

                                if (!segunda) {

                                    setDias([...dias, 2]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }}>S</p>
                            <p className={diaTerca} onClick={() => {
                                setTerca(!terca)
                                let array = [...dias];
                                let index = array.indexOf(3);

                                if (!terca) {

                                    setDias([...dias, 3]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }}>T</p>
                            <p className={diaQuarta} onClick={() => {
                                setQuarta(!quarta)
                                let array = [...dias];
                                let index = array.indexOf(4);

                                if (!quarta) {

                                    setDias([...dias, 4]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }
                            }>Q</p>
                            <p className={diaQuinta} onClick={() => {
                                setQuinta(!quinta)
                                let array = [...dias];
                                let index = array.indexOf(5);

                                if (!quinta) {

                                    setDias([...dias, 5]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }}>Q</p>
                            <p className={diaSexta} onClick={() => {
                                setSexta(!sexta)
                                let array = [...dias];
                                let index = array.indexOf(6);

                                if (!sexta) {

                                    setDias([...dias, 6]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }}>S</p>
                            <p className={diaSabado} onClick={() => {
                                setSabado(!sabado)
                                let array = [...dias];
                                let index = array.indexOf(7);

                                if (!sabado) {
                                    setDias([...dias, 7]);

                                } else if (index > -1) {

                                    array.splice(index, 1);

                                    setDias(array);
                                }
                            }}>S</p>
                        </div>
                        <div className="botoes">
                            <button className="botao-cancelar">Cancelar</button>
                            <button type="submit" className="botao-salvar">Salvar</button>
                        </div>
                    </form>
                </div >
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Container >
        );
    }
}

const Container = styled.div`

font-family: 'Lexend Deca';

p{
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

export default Habito;