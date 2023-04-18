import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoIncrementarValor from "./BotaoIncrementarValor"
import BotaoDecrementarValor from "./BotaoDecrementarValor"


const TelaPrincipal = () => {

    const id = useSelector((state) => state.id.value)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(
        ()=>{
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setLoading(false)
                }
            )
            .catch(error=>{console.log(error);setLoading(false)})
        }//funcao do effect
        ,
        [id]
    )

    const renderizarImagem = () => {
        if(loading) return (
            <h3>Carregando...</h3>
        )
        return (
            <Imagem nome={nome} imagem={imagem}/>
        )
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderizarImagem()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar />
                            <BotaoIncrementarValor />
                        </td>
                        <td>
                            <BotaoDecrementar />
                            <BotaoDecrementarValor />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TelaPrincipal