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
            <p className={diaDomingo} onClick={() => {
                domingo(!estadoDomingo)
                let array = [...dias];
                let index = array.indexOf(1);

                if (!estadoDomingo) {

                    setDias([...dias, 1]);

                } else if (index > -1) {

                    array.splice(index, 1);
                    setDias(array);
                }
            }}>D</p>
            <p className={diaSegunda} onClick={() => {
                segunda(!estadoSegunda)
                let array = [...dias];
                let index = array.indexOf(2);

                if (!estadoSegunda) {

                    setDias([...dias, 2]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</p>
            <p className={diaTerca} onClick={() => {
                terca(!estadoTerca)
                let array = [...dias];
                let index = array.indexOf(3);

                if (!estadoTerca) {

                    setDias([...dias, 3]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>T</p>
            <p className={diaQuarta} onClick={() => {
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
            }>Q</p>
            <p className={diaQuinta} onClick={() => {
                quinta(!estadoQuinta)
                let array = [...dias];
                let index = array.indexOf(5);

                if (!estadoQuinta) {

                    setDias([...dias, 5]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>Q</p>
            <p className={diaSexta} onClick={() => {
                sexta(!estadoSexta)
                let array = [...dias];
                let index = array.indexOf(6);

                if (!estadoSexta) {

                    setDias([...dias, 6]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</p>
            <p className={diaSabado} onClick={() => {
                sabado(!estadoSabado)
                let array = [...dias];
                let index = array.indexOf(7);

                if (!estadoSabado) {
                    setDias([...dias, 7]);

                } else if (index > -1) {

                    array.splice(index, 1);

                    setDias(array);
                }
            }}>S</p>
        </Dias>
    );
}

const Dias = styled.div`

    font-family: 'Lexend Deca';
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default SelecaoDias;