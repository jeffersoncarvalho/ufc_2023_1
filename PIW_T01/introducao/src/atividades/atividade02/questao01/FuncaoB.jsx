import MinhaCor from "./MeuContexto"
import { useContext } from "react"
const FuncaoB = () => {
    const {bkgB} = useContext(MinhaCor)
    return (
        <div>
            <h1 style={{backgroundColor:bkgB}}>Função B</h1>
        </div>
    )
}
export default FuncaoB 