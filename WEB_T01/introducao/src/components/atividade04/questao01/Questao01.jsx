import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const vetor = [
                    { id: 1, nome: "Sicrano", ira: 4.5 },
                    { id: 2, nome: "Fulano", ira: 8.2 },
                    { id: 3, nome: "Beltrano", ira: 7.3 }
                ]
                const meuInt = Math.floor((Math.random() * 10)) + 1
                if (meuInt === 1) reject({ id: 1, msg: "ERRO DE CONEXÃO" })
                else if (meuInt === 2) reject({ id: 2, msg: "ERRO DE DADOS" })
                else resolve({ id: meuInt, msg: "OK", vetor })

            } //função a executar do timeout
            ,
            3000
        )//setTimeout
    } //resolve e reject
)

const Questao01 = () => {

    const [meusDados, setMeusDados] = useState([])
    const [loading, setLoading] = useState(false)

    function promessaThenCatch() {
        minhaPromessa
            .then(
                (data) => {
                    console.log("ID: " + data.id)
                    console.log("VETOR: " + data.vetor)
                    setMeusDados(data.vetor)
                }
            )
            .catch(
                (error) => {
                    console.log("ID: " + error.id)
                    console.log("MSG: " + error.msg)
                    alert(error.msg)
                }
            )
    }

    async function promessaAsyncAwait() {
        setLoading(true)
        try{
            const resposta = await minhaPromessa
            setLoading(false)
            setMeusDados(resposta.vetor)
        }
        catch(error){
            console.log("ID: " + error.id)
            console.log("MSG: " + error.msg)
            alert(error.msg)
            setLoading(false)
        }
    }

    useEffect(
        () => {
            //promessaThenCatch()
            promessaAsyncAwait()
        }
        ,
        []
    )

    function renderizar() {
        if(loading) return <h3>Loading...</h3>
        return (
            meusDados.map(
                (dado, index) => <h3 key={index + dado.nome}>{dado.nome} - {dado.ira}</h3>
            )
        )
    }

    return (
        <>
            <h1>Questao 01</h1>
            {renderizar()}
        </>
    )
}

export default Questao01