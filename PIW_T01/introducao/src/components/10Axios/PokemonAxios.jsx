import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const PokemonAxios = () => {

    const [id, setId] = useState(100)
    const [nome, setNome] = useState("Bulbassaur")
    const [imagem1, setImagem1] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png")
    const [imagem2, setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {

            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (response) => {
                        /*console.log(response.data.name)
                        console.log(response.data.sprites.back_default)
                        console.log(response.data.sprites.front_default)*/
                        setNome(response.data.name)
                        setImagem1(response.data.sprites.back_default)
                        setImagem2(response.data.sprites.front_default)
                        setLoading(false)
                    }
                )
                .catch((error) => console.log(error))
        }
        ,
        [id] //caso vc queira emular um constutor, ou seja, executar apenas uma única vez, não coloque variáveis na lista de variáveis.
    )


    const renderizarConteudo = () => {
        if(loading) return (
            <>
                <tr>
                    <td colSpan={2}>
                        <h3>Loading....</h3>
                    </td>
                </tr>
            </>
        )
        return (
            <>
                <tr>
                    <td style={{ textAlign: "center" }} colSpan={2}>
                        <h2>Nome: {nome}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            src={imagem1}
                            style={{ width: "300px" }}
                        />
                    </td>
                    <td>
                        <img
                            src={imagem2}
                            style={{ width: "300px" }}
                        />
                    </td>
                </tr>
            </>
        )
    }

    return (
        <>
            <table border={"5px"}>
                <tbody>
                    {renderizarConteudo()}
                    <tr>
                        <td colSpan={2} style={{ textAlign: "center" }}>
                            <button onClick={() => setId((prev) => prev + 1)}>ID + 1</button>
                            <button onClick={() => setId((prev) => prev - 1)}>ID - 1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PokemonAxios