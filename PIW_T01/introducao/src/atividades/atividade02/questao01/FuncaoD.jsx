import MinhaCor from "./MeuContexto"

const FuncaoD = () => {
    return (
        <MinhaCor.Consumer>
            {
                ({bkgD}) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor:bkgD}}>Função D</h1>
                        </div>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}
export default FuncaoD