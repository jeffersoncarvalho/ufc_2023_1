import MinhaCor from "./MeuContexto"

const FuncaoD = () => {
    return (
        <MinhaCor.Consumer>
            {
                ({minhaCor,nome}) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor:minhaCor}}>Função D do {nome}</h1>
                        </div>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}
export default FuncaoD