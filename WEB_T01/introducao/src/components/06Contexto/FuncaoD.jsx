import CorContexto from './MeuContexto'
//MODO LEGADO
const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                ({cor2,nome}) =>
                    <div>
                        <h1 style={{ backgroundColor: cor2 }}>Funcão D de {nome}</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}
export default FuncaoD