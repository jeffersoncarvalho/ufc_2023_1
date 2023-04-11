import FunctionB from "./FunctionB"

const FunctionA = ({sobrenome}) => {
    return (
        <div>
            <h1>Componente A</h1>
            <FunctionB nome="Wladimir" sobrenome={sobrenome}/>
            <FunctionB nome="Wladimir" />
            <FunctionB nome="Wladimir" />
            <FunctionB nome="Wladimir"  sobrenome={sobrenome}/>
        </div>
    )
}

export default FunctionA