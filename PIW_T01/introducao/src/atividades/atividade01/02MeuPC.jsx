const PlacaMae = ({nome,preco}) => {
    return (
        <h1>Placa Mãe Nome: {nome} Preço: {preco}</h1>
    )
}

const PlacaDeVideo = ({nome,preco}) => <h1>Placa de Vídeo Nome: {nome} Preço: {preco}</h1>

const Memoria = ({nome,preco}) => <h1>Memória Nome: {nome} Preço: {preco}</h1>

export {PlacaMae, PlacaDeVideo, Memoria}