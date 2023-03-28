import MinhaCor from "./MeuContexto"
import { useContext } from "react"
const FuncaoB = () => {
    const {minhaCor} = useContext(MinhaCor)
    return (
        <div>
            <h1 style={{backgroundColor:minhaCor}}>Função B</h1>
        </div>
    )
}
export default FuncaoB 