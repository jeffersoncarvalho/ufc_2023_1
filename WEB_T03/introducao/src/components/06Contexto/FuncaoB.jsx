import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                ({cor}) => {
                    return (
                        <h1 style={{backgroundColor:cor}}>Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}
export default FuncaoB