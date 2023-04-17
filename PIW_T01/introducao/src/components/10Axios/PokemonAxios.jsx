import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const PokemonAxios = () => {

    const [id,setId] = useState(100)
    const [nome,setNome] = useState("Bulbassaur")
    const [imagem1,setImagem1] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png")
    const [imagem2,setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")


    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    /*console.log(response.data.name)
                    console.log(response.data.sprites.back_default)
                    console.log(response.data.sprites.front_default)*/
                    setNome(response.data.name)
                    setImagem1(response.data.sprites.back_default)
                    setImagem2(response.data.sprites.front_default)
                }
            )
            .catch((error)=>console.log(error))
        }
        ,
        [] //caso vc queira emular um constutor, ou seja, executar apenas uma única vez, não coloque variáveis na lista de variáveis.
    )

    return (
        <>
            <table border={"5px"}>
                <tbody>
                    <tr>
                        <td style={{textAlign:"center"}} colSpan={2}>
                            <h2>Nome: {nome}</h2>
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
                </tbody>
            </table>
        </>
    )
}

export default PokemonAxios