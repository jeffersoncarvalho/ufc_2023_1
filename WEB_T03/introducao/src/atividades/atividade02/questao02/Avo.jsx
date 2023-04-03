import Filho from "./Filho"
import PokemonContexto from "./PokemonContexto"

const Avo = () => {
    const numero = 1
    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{width:"400px"}}
                />
                <Filho />
            </div>
        </PokemonContexto.Provider>
    )
}
export default Avo