function Hoje({nome, recorde, sequencia}) {
    return (
        <div>
            <p className="nome">{nome}</p>
            <p className="info">{sequencia}</p>
            <p className="info">{recorde}</p>
        </div>
    );
}

export default Hoje;