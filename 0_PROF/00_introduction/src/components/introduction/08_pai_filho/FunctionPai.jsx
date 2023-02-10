import FunctionFilho from "./FunctionFilho"

const FunctionPai = () => {
    
    function mensagemDoFilho(mensagem) {
        //alert("Recebi: " + mensagem)
        alert(`Recebi: ${mensagem}`)
    }
    
    return (
        <FunctionFilho rotina={mensagemDoFilho} />
    )
}

export default FunctionPai