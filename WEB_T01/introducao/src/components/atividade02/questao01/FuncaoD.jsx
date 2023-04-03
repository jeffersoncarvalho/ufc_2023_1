import CorContexto from './MeuContexto'

//MODO LEGADO
const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                (cores) =>
                    <div>
                        <h1 style={{ backgroundColor: cores.bkgD }}>Funcão D</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}
export default FuncaoD