import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"

import CorContexto from './MeuContexto'

const FuncaoA = () => {

    const cores = {bkgA:"green",bkgB:"yellow",bkgC:"gray",bkgD:"red"} 

    return (
        <CorContexto.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>Funcão A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}
export default FuncaoA