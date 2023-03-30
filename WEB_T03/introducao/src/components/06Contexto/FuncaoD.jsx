import MinhaCor from "./MeuContexto"
import { useContext } from "react"

const FuncaoD = () => {
    const {cor,nome} = useContext(MinhaCor)
    return (
        <h1 style={{backgroundColor:cor}}>Função D de {nome}</h1>
    )
}
export default FuncaoD