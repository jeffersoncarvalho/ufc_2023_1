import { useState } from "react"
import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    //const cor = {cor:"red",nome:"Jefferson"}
    const [cor,setCor] = useState({cor:"red",nome:"Jefferson",flag:true})
    
    
    return (
        <MinhaCor.Provider value={cor}>
            <div>
                <h1 style={{ backgroundColor: cor.cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
            <div>
                <button 
                    onClick={
                        () => {
                            if(cor.flag)
                                setCor({cor:"green",nome:"Rainara",flag:false})
                            else setCor({cor:"red",nome:"Jefferson",flag:true})
                        }
                    }
                >
                    Mudar Cor
                </button>
            </div>
        </MinhaCor.Provider>
    )
}
export default FuncaoA