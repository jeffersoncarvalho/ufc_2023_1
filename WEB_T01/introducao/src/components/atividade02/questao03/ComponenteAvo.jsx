import { useState } from "react"
import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"


const ComponenteAvo = () => {

    //let numero  = 1
    const [numero, setNumero] = useState(1)

    const acaoBotao = () => {
        //alert("CLICOU NOVAMENTE!")
        //numero = numero + 1
        //console.log(numero)
        setNumero(numero + 1)
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width:"400px"}}
                />
                {/* <button
                    onClick={
                        ()=>{
                            alert("CLICADO!")
                        }
                    }
                >
                    Aumentar Número
                </button> */}
                <button
                    onClick={acaoBotao}
                >
                    Aumentar Número
                </button>
                <ComponentePai />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo