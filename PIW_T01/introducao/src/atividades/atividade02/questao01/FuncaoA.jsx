import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    const cores = {bkgA:"yellow",bkgB:"red",bkgC:"green",bkgD:"gray"}
    return (
        <MinhaCor.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>

    )
}
export default FuncaoA 