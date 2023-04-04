import { useState } from "react"
import Filho from "./Filho"
import PokemonContexto from "./PokemonContexto"

const Avo = () => {
    //let numero = 1

    const [numero, setNumero] = useState(10)

    const acaoBotao = () => {
        //alert("FUI APERTADO")
        //numero = numero + 1
        //console.log(numero)
        setNumero(numero + 1)
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Avô</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{ width: "400px" }}
                />
                <button
                    onClick={
                        acaoBotao
                    }
                >
                    ME APERTE!
                </button>
                <Filho />
            </div>
        </PokemonContexto.Provider>
    )
}
export default Avo