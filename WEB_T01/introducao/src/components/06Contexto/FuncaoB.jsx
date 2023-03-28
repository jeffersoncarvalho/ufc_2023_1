import CorContexto from './MeuContexto'
//MODO LEGADO
const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                ({cor,nome,cor2}) =>
                    <div>
                        <h1 style={{ backgroundColor: cor2 }}>Funcão B de {nome}</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}
export default FuncaoB