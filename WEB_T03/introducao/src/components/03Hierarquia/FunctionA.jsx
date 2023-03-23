import FunctionB from "./FunctionB"

const FunctionA = ({x,y}) => {
    return (
        <div>
            <h1>Componente A</h1>
            <FunctionB x={x} y={y} />
        </div>
    )
}
export default FunctionA