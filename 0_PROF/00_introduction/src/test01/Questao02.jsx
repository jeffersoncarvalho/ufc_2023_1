import { useRef, useState } from "react"

const Questao02 = () => {

    const virar = useRef(true)
    const [imagem, setImagem] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

    const acaoVirar = () => {
        virar.current = !virar.current
        console.log(virar.current)
        if(virar.current) setImagem("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        else setImagem("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png ")
       
    }

    return (
        <>
            <img src={imagem} width="200px" />
            <button
                onClick={acaoVirar}
            >
                Virar!
            </button>
        </>
    )
}
export default Questao02