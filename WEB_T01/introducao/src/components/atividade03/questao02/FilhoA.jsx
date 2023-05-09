const FilhoA = ({meuVetor,enviarMaior}) => {

    const calcularMaiorElemento = () =>{
        
        const maior = Math.max(...meuVetor)
        enviarMaior(maior)
    }

    return (
        <>
            <h1>Componente FilhoA</h1>
            <button
                onClick={calcularMaiorElemento}
            >
                Maior Elemento
            </button>
        </>
    )
}

export default FilhoA