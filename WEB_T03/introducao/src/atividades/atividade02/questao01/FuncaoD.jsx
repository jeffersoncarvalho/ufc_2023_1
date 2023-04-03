import MinhaCor from "./MeuContexto"
import { useContext } from "react"

const FuncaoD = () => {
    const {bkgD} = useContext(MinhaCor)
    return (
        <h1 style={{backgroundColor:bkgD}}>Função D</h1>
    )
}
export default FuncaoD