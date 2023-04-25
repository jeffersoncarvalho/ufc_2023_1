import { useDispatch } from "react-redux"
import { incrementar, incrementarValor } from "./id/idSlice"
import { useState } from "react"

const BotaoIncrementar = () => {

    const despachante = useDispatch()
    const [valor,setValor] = useState(0)
    let meuValor = 19

    return (
        <>
           
            <button onClick={()=>despachante(incrementar())}>
                ID + 1
            </button>
            <input
                type="number"
                onChange={
                    (event)=>{
                        //console.log(event.target.value)
                        //setValor(event.target.value)
                        meuValor = Number(event.target.value)
                    }
                }
            />
            <button
                onClick={()=>despachante(incrementarValor(meuValor))}
            >
                Aumentar Valor
            </button>
        </>
    )
}
export default BotaoIncrementar 