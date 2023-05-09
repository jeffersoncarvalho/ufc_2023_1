const FilhoC = ({meuVetor,enviarMedia}) => {

    const calcularMediaDosElementos = () =>{
        let media = 0
        for(let i=0;i<meuVetor.length;i++) media += meuVetor[i]
        enviarMedia(media/meuVetor.length)
    }

    return (
        <>
            <h1>Componente FilhoC</h1>
            <button onClick={calcularMediaDosElementos}>
                Média dos Elementos
            </button>
        </>
    )
}

export default FilhoC