//V0
/*const MyProps = (props) => {

    const renderizarMeuNome = () => {
        return (
            <span> Jefferson </span>
        )
    }

    return (
        <div>
            <h1>O meu nome é: {renderizarMeuNome()}</h1>
            <h1>O meu nome, com props, é: {props.nome}</h1>
        </div>
    )
}*/

//V1
/*const MyProps = (props) => {
    const {nome,idade,curso} = props
    return (
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>O minha idade é: {idade}</h1>
            <h1>O meu curso é: {curso}</h1>
        </div>
    )
}*/

//V2
const MyProps = ({nome,idade,curso}) => {
    return (
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>O minha idade é: {idade}</h1>
            <h1>O meu curso é: {curso}</h1>
        </div>
    )
}

export default MyProps