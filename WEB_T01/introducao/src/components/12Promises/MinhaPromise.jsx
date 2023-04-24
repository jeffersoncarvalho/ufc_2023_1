import { useEffect, useState } from "react"



const meuGet = (url) => {
    //fiz alguma coma url (passei pra promessa, por exemplo)
    //console.log(url)

    const minhaPromise = new Promise(
        (resolve,reject) => {
            //alguma lógica que está produzindo algo e que demora algum tempo
            //console.log("iniciando a lógica")
            setTimeout(
                ()=>{
                    //console.log("lógica terminada")
                    const meuInt = Math.floor((Math.random()*10))+1
                    //console.log(meuInt)
                    if(meuInt%2===0) resolve({numero:meuInt,msg:"Deu tudo certo!"})
                    else reject({numero:meuInt,msg:"Deu tudo errado!"})
                }
                ,
                3000
            )
        }
    )

    return minhaPromise
}

const MinhaPromise = () => {

    const [loading, setLoading] = useState(false)

    useEffect(
        ()=>{
            /*meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))*/
            console.log("INÍCIO...")
            setLoading(true)
            meuGet("http:...")
            .then(
                (response) => {
                    console.log("RESPOSTA OK: ")
                    console.log(response.numero)
                    console.log(response.msg)
                    //console.log("FIM...")
                }
            )
            .catch(
                (error) => {
                    console.log("RESPOSTA NOK: ")
                    console.log(error.numero)
                    console.log(error.msg)
                    //console.log("FIM...")
                }
            )
            .finally(
                ()=>{
                    console.log("FIM...")
                    setLoading(false)
                }
            )
            
        }
        ,
        []
    )

    function renderizar() {
        if(loading) return (
            <>
                <h1>Loading...</h1>
            </>
        )
        return (
            <>
                <h1>Testando a Promise!</h1>
            </>
        )
    }

    return (
        <>
            {renderizar()}            
        </>
    )
}
export default MinhaPromise