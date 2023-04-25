import { useSelector } from "react-redux"

const Imagem = () => {

    const id = useSelector(
        (state)=>state.id.value
    )


    return (
        <>
            <h1>ID: {id}</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                style={{width:"300px"}}
            />
        </>
    )
}
export default Imagem 