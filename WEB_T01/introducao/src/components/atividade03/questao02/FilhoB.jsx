const FilhoB = ({meuVetor,enviarMenor}) => {

    function calcularMenorElemento(){
        const menor = Math.min(...meuVetor)
        enviarMenor(menor)
    }

    return (
        <>
            <h1>Componente FilhoB</h1>
            <button onClick={calcularMenorElemento}>
                Menor Elemento
            </button>
        </>
    )
}

export default FilhoB