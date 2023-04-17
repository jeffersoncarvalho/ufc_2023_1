import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import { useState } from "react"

const TelaPrincipal = () => {

    const [id, setId] = useState(150)

    const incrementar = () => {
        setId((prev)=>prev+1)
    }

    const decrementar = () => {
        setId((prev)=>prev-1)
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}/>
                        </td>
                        <td>
                            <BotaoDecrementar decrementar={decrementar}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TelaPrincipal