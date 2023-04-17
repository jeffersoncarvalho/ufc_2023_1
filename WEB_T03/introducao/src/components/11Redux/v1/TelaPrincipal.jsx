import { useState } from "react"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import Imagem from "./Imagem"

const TelaPrincipal = () => {
    const [id, setId] = useState(50)

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
                        <td colSpan={2}>
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