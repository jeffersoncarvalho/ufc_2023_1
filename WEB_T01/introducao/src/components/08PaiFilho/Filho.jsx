
const Filho = (props) => {
    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada}</h3>
            <button
                onClick={
                    () => {
                        //alert("Fui Clicado!")
                        props.enviarMensagemProPai("Obrigado Pai")
                    }
                }
            >
                Agradecer Pai
            </button>
        </>
    )
}
export default Filho