import { useState } from "react";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="senha" value={senha} required onChange={(e) => setSenha(e.target.value)}></input>
            <button>Entrar</button>
        </>
    );
}

export default Login;