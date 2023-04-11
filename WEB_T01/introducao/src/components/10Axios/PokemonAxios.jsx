import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const PokemonAxios = () => {

    const [id, setId] = useState(1)
    const [nome,setNome] = useState("")
    const [imagem,setImagem] = useState("")
    const [imagem2,setImagem2] = useState("")

    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    //console.log(response.data)
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch((error) => console.log(error))
        }
        ,
        [id]
    )

    return (
        <>
            <h3>Nome: {nome}</h3>
            <h3>ID: {id}</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                        <img src={imagem} style={{width:"400px"}}/>
                        </td>
                        <td>
                        <img src={imagem2} style={{width:"400px"}}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
            <button
                onClick={
                    ()=>{
                        setId((prev)=>prev-1)
                    }
                }
            >
                Anterior Pokemon
            </button>
            <button
                onClick={
                    ()=>{
                        setId((prev)=>prev+1)
                    }
                }
            >
                Próximo Pokemon
            </button>
        </>
    )
}

export default PokemonAxios