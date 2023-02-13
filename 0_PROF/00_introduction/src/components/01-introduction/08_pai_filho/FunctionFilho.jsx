const FunctionFilho = (props) => {

    function enviarMensagemProPai(mensagem) {
        props.rotina(mensagem)
    }

    return (
        <div>
            <h1>Enviar mensagem...</h1>
            <button 
                onClick={
                    () => {
                        //alert("Fui clicado!")
                        enviarMensagemProPai("Oi Pai!")
                    }
                }
            >
                Enviar
            </button>
        </div>
    )
}

export default FunctionFilho