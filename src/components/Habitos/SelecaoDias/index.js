import styled from "styled-components";

function SelecaoDias(props) {

    const { domingo, segunda, terca, quarta, quinta, sexta, sabado, estadoDomingo, estadoSegunda, estadoTerca,
        estadoQuarta, estadoQuinta, estadoSexta, estadoSabado, setDias, dias } = props;

    const diaDomingo = `dia ${estadoDomingo ? "selecionado" : ""}`;
    const diaSegunda = `dia ${estadoSegunda ? "selecionado" : ""}`;
    const diaTerca = `dia ${estadoTerca ? "selecionado" : ""}`;
    const diaQuarta = `dia ${estadoQuarta ? "selecionado" : ""}`;
    const diaQuinta = `dia ${estadoQuinta ? "selecionado" : ""}`;
    const diaSexta = `dia ${estadoSexta ? "selecionado" : ""}`;
    const diaSabado = `dia ${estadoSabado ? "selecionado" : ""}`;

    return (
        <Dias>
            <button type="button" className={diaDomingo} onClick={() => {
                domingo(!estadoDomingo)
                let array = [...dias];
                let index = array.indexOf(1);

                if (!estadoDomingo) {

                    setDias([...dias, 1]);

                } else if (index > -1) {

                    array.splice(index, 1);
                    setDias(array);
                }
            }}>D</button>
            <button type="button" className={diaSegunda} onClick={() => {
                segunda(!estadoSegunda)
                let array = [...dias];
                let index = array.indexOf(2);

                if (!estadoSegunda) {

                    setDias([...dias, 2]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</button>
            <button type="button" className={diaTerca} onClick={() => {
                terca(!estadoTerca)
                let array = [...dias];
                let index = array.indexOf(3);

                if (!estadoTerca) {

                    setDias([...dias, 3]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>T</button>
            <button type="button" className={diaQuarta} onClick={() => {
                quarta(!estadoQuarta)
                let array = [...dias];
                let index = array.indexOf(4);

                if (!estadoQuarta) {

                    setDias([...dias, 4]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }
            }>Q</button>
            <button type="button" className={diaQuinta} onClick={() => {
                quinta(!estadoQuinta)
                let array = [...dias];
                let index = array.indexOf(5);

                if (!estadoQuinta) {

                    setDias([...dias, 5]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>Q</button>
            <button type="button" className={diaSexta} onClick={() => {
                sexta(!estadoSexta)
                let array = [...dias];
                let index = array.indexOf(6);

                if (!estadoSexta) {

                    setDias([...dias, 6]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</button>
            <button type="button" className={diaSabado} onClick={() => {
                sabado(!estadoSabado)
                let array = [...dias];
                let index = array.indexOf(7);

                if (!estadoSabado) {
                    setDias([...dias, 7]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</button>
        </Dias>
    );
}

const Dias = styled.div`

    font-family: 'Lexend Deca';
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
`

export default SelecaoDias;