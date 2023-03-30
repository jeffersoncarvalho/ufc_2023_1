import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    const cor = {cor:"red",nome:"Jefferson"}
    return (
        <MinhaCor.Provider value={cor}>
            <div>
                <h1 style={{ backgroundColor: cor.cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    )
}
export default FuncaoA