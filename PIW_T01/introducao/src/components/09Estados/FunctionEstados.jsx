import { useState, useEffect } from "react"

const FunctionEstados = () => {

    //let contador = 10
    const [contador, setContador] = useState(100)
    const [ehPar, setEhPar] = useState(true)

    useEffect(
        ()=>{
            if(contador%2===0) setEhPar(true)
            else setEhPar(false)   
        }
        ,
        [contador]
    )

    const acaoBotao = () => {
        setContador(contador+1)
    }

    return (
        <>
            <h1>Contador: {contador}</h1>
            <h1>Eh Par: {""+ehPar}</h1>
            <button
                onClick={acaoBotao}
            >
                Aumentar Contador
            </button>
        </>
    )
}

export default FunctionEstados