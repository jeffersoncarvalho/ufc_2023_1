import { useState } from "react"
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"


const Pai = () => {
    
    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)
    const [media, setMedia] = useState(0)

    const meuVetor = [3,7,9,2,5]

    const enviarMaior = (maior) => {
        setMaior(maior)
    }

    const enviarMenor = (menor) => {
        setMenor(menor)
    }

    const enviarMedia = (media) => {
        setMedia(media)
    }

    return (
        <>
            <h1>Componente Pai</h1>
            <h1>Maior: {maior}</h1>
            <h1>Menor: {menor}</h1>
            <h1>Média: {media}</h1>
            <FilhoA meuVetor={meuVetor} enviarMaior={enviarMaior}/>
            <FilhoB meuVetor={meuVetor} enviarMenor={enviarMenor}/>
            <FilhoC meuVetor={meuVetor} enviarMedia={enviarMedia}/>
        </>
    )
}

export default Pai