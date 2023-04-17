import { useState, useEffect } from "react"
import axios from "axios"

const PokemonAxios = () => {

    const [id, setId] = useState(5)
    const [nome, setNome] = useState("Bulbassaur")
    const [imagem1, setImagem1] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    const [imagem2, setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png")
    
    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    console.log(response.data)
                    setNome(response.data.name)
                    setImagem1(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch((error)=>console.log(error))

        }
        ,
        [id]
    )

    return (
        <>
            <table border="10px">
                <tbody>
                    <tr>
                        <td colSpan={2} style={{textAlign:"center"}}>
                            Nome: {nome}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={imagem1}
                                style={{width:"300px"}} 
                            />
                        </td>
                        <td>
                            <img 
                                src={imagem2}
                                style={{width:"300px"}} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>setId((prev)=>prev+1)}>ID + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>setId((prev)=>((prev-1) < 1)? 1 : prev-1)}>ID - 1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default PokemonAxios