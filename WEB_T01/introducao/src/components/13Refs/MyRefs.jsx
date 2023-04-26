import { useRef, useState } from "react"

let globalX = 0 //totalmente não aconselhável! EVITAR!

const MyRefs = () => {

    let x = 0 // é inicializada quando o componente é novamente renderizado
    const [stateX, setStateX] = useState(0)
    const [flag, setFlag] = useState(false) //totalmente não aconselhável! EVITAR!
    const refX = useRef(0) //vc provalmente não quer que ela seja renderizada mas que seu estado seja mantido em novas renderizações

    return (
        <>
            {console.log("RENDER")}
            <h1>X: {x}</h1>
            <h1>stateX: {stateX}</h1>
            <h1>globalX: {globalX}</h1>
            <h1>refX: {refX.current}</h1>
            <button
                onClick={
                    () => { 
                        x += 1
                        console.log("x: " + x)
                    }
                }
            >
                x + 1
            </button>
            <button
                onClick={
                    () => { 
                        setStateX((prev)=>prev+1)
                        console.log("stateX: " + stateX)
                    }
                }
            >
                stateX + 1
            </button>
            <button
                onClick={
                    () => { 
                        globalX += 1
                        console.log("globalX: " + globalX)
                        //setFlag(!flag)
                    }
                }
            >
                globalX + 1
            </button>
            <button
                onClick={
                    () => { 
                        refX.current = refX.current + 1
                        console.log("refX: " + refX.current)
                       
                    }
                }
            >
                refX + 1
            </button>
        </>
    )
}

export default MyRefs