
import Filho from "./Filho"

const Pai = () => {

    const receberMensagemDoFilho = (mensagem) => {
        alert("Filho falou:" + mensagem)
    }

    return (
        <>
            <h1>Componente Pai</h1>
            <Filho mesada={600.00} enviarMensagemProPai={receberMensagemDoFilho}/>
        </>
    )
}
export default Pai