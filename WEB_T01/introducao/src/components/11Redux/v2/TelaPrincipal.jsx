import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"

const TelaPrincipal = () => {

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
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