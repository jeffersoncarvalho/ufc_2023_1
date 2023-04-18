import { useSelector } from "react-redux" 

const Imagem = ({nome,imagem}) => {
    const id = useSelector(
        (state) => state.id.value
    ) //lendo uma variável do estado

    return (
        <>
            <h1>ID: {id}</h1>
            <h1>{nome}</h1>
            <img
                src={imagem}
                style={{width:"400px"}}
            />
        </>
    )
}
export default Imagem