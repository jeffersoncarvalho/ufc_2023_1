import FuncaoD from "./FuncaoD"
import MinhaCor from "./MeuContexto"
import { useContext } from "react"

const FuncaoC = () => {
    const {bkgC} = useContext(MinhaCor)
    return (
        <div>
            <h1 style={{backgroundColor:bkgC}}>Função C</h1>
            <FuncaoD/>
        </div>
    )
}
export default FuncaoC