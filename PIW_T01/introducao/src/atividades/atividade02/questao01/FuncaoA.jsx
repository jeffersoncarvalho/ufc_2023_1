import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    const cor = "red"
    return (
        <MinhaCor.Provider value={{minhaCor:cor,nome:"Jefferson"}}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>

    )
}
export default FuncaoA 