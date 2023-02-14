import { useEffect, useState } from "react"

const minhaPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                //resolve("Deu tudo certo!")
                //reject("Deu tudo errado!")
                const myInt = Math.floor(Math.random() * 10) + 1
                //console.log(myInt)
                return (myInt % 2 === 0)?resolve("Deu tudo certo!"):reject("Deu tudo errado!")
            }
            ,
            1000
        )
    }
)

const MinhaPromise = () => {

    const [texto, setTexto] = useState("Texto Vazio")

    useEffect(
        () => {
            minhaPromise
            .then(
                (msg) => {
                    setTexto(msg)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    return (
        <>
            <h1>{texto}</h1>
        </>
    )
}

export default MinhaPromise