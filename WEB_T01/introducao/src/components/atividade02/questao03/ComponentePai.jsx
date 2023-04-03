import { useContext } from "react"
import ComponenteFilho from "./ComponenteFilho"
import PokemonContexto from "./MeuContexto"

const ComponentePai = () => {

    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Pai</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                style={{ width: "400px" }}
            />
            <ComponenteFilho />
        </div>
    )
}

export default ComponentePai