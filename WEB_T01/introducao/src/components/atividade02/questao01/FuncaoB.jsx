import CorContexto from './MeuContexto'
//MODO LEGADO
const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                
                ({bkgB}) =>
                    <div>
                        <h1 style={{ backgroundColor: bkgB }}>Funcão B</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}
export default FuncaoB