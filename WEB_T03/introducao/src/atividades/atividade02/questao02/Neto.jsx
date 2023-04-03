import { useContext } from "react"
import PokemonContexto from "./PokemonContexto"

const Neto = () => {
    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h1>Neto</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                alt="Pokemon"
                style={{ width: "400px" }}
            />
        </div>
    )
}
export default Neto