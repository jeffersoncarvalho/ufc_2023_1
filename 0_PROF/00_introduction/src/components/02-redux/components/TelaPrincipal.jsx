import { useSelector } from "react-redux"
import { selectId } from "../slice/pokemonSlice"

import ImagemPokemon from "./ImagemPokemon"
import BotaoAumentar from "./BotaoAumentar"
import BotaoDiminuir from "./BotaoDiminuir"
import AumentarQuantidade from "./AumentartQuantidade"

const TelaPrincipal = () => {
    const id = useSelector(selectId)
    return (
        <div>
            <h1>Pokemon ID: {id}</h1>
            <ImagemPokemon />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <BotaoAumentar />
                            </td>
                            <td>
                                <BotaoDiminuir />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <AumentarQuantidade />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TelaPrincipal