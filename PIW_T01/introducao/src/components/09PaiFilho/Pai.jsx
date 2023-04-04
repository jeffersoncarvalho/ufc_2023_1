import { useState } from "react"
import Filho from "./Filho"

const Pai = () => {

    const [nome,setNome] = useState("Teste")

    const mensagemDoFilho = (msg) => {
        alert("Meu filho disse: " + msg)
        setNome("Jefferson")
    }

    return (
        <div>
            <h1>Pai {nome}</h1>
            <Filho falarComPai={mensagemDoFilho}/>  
        </div>
    )
}

export default Pai