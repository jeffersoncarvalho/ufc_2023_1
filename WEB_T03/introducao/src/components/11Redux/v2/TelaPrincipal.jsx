import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import Imagem from "./Imagem"

const TelaPrincipal = () => {
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar />
                        </td>
                        <td>
                            <BotaoDecrementar />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TelaPrincipal