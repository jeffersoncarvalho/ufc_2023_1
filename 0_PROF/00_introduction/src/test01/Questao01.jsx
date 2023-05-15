import { useEffect, useState } from "react"

const Questao01A = () => {

    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState(false)

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    
    const inicializarMedias = (medias) => {
        setMedias(medias)
        setLoading(!loading)
        console.log(medias)
    }

    const renderizarAlunos = () => {
        let i = 0
        return medias.map(
            (media) => {
                console.log(alunos[i].nome)
                if (media >= 6) return <h3>{alunos[i].nome}</h3>
                i++ 
            }
        )
    }

    return (
        <>
            <h1>Questao01A</h1>
            <Questao01B alunos={alunos} inicializarMedias={inicializarMedias}/>
            {renderizarAlunos()}
        </>
    )
}

function Questao01B({alunos, inicializarMedias}) {
    
    let medias = []

    useEffect(
        () => {
            for(let i=0; i<alunos.length;i++){
                const media = (alunos[i].notas.ap1 + alunos[i].notas.ap2)/2
                medias.push(media) 
            }
            inicializarMedias(medias)
        }
        ,
        []
    )

    return (
        <>
            <h1>Questao01B</h1>
        </>
    )
}

export {Questao01A, Questao01B}