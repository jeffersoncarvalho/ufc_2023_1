import { useSelector } from "react-redux"
import { selectId } from "../slice/pokemonSlice"

import ImagemPokemon from "./ImagemPokemon"
import BotaoAumentar from "./BotaoAumentar"
import BotaoDiminuir from "./BotaoDiminuir"


const TelaPrincipal = () => {
    const id = useSelector(selectId)
    return (
        <div>
            <h1>Pokemon ID: {id}</h1>
            <ImagemPokemon />
            <div>
                <BotaoAumentar />
                <BotaoDiminuir />
            </div>
        </div>
    )
}

export default TelaPrincipal