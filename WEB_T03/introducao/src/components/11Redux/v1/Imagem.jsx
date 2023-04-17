const Imagem = ({id}) => {
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                style={{width:"300px"}}
            />
        </>
    )
}
export default Imagem