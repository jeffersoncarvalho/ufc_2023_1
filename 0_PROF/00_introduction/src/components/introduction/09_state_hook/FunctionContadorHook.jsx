import { useState, useEffect } from "react"

const FunctionContadorHook = () => {

    const [contador, setContador] = useState(0)
    const [ehPar,setEhPar] = useState(true)

    useEffect(
        ()=>{
            if(contador%2===0) setEhPar(true)
            else setEhPar(false)
        }
        ,
        [contador]
    )

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <h1>Eh Par: {(ehPar)?"PAR":"ÍMPAR"}</h1>
            <button
                onClick={
                    () => {
                       setContador(contador + 1)
                    }
                }
            >
                Aumentar 1
            </button>
        </div>
    )

}

export default FunctionContadorHook