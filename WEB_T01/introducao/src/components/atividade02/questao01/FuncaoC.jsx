import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

const FuncaoC = () => {
    const {bkgC} = useContext(CorContexto)
    
    return (
        <div>
            <h1 style={{backgroundColor:bkgC}}>Funcão C</h1>
            <FuncaoD />
        </div>
    )
}
export default FuncaoC