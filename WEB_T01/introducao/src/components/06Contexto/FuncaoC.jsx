import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

const FuncaoC = () => {
    const {cor2} = useContext(CorContexto)
    
    return (
        <div>
            <h1 style={{backgroundColor:cor2}}>Funcão C</h1>
            <FuncaoD />
        </div>
    )
}
export default FuncaoC