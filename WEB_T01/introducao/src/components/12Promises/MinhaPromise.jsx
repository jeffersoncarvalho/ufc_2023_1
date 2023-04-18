import { useEffect } from "react"

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

const meuGet = (url) => {
    //fiz alguma coma url (passei pra promessa, por exemplo)
    //console.log(url)
    return minhaPromise
}

const MinhaPromise = () => {

    useEffect(
        ()=>{
            /*meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))*/
            meuGet("http:...")
            .then(
                (response) => {
                    console.log(response.numero)
                    console.log(response.msg)
                }
            )
            .catch(
                (error) => {
                    console.log(error.numero)
                    console.log(error.msg)
                }
            )
        }
        ,
        []
    )

    return (
        <>
            <h1>Testando a Promise!</h1>
        </>
    )
}
export default MinhaPromise