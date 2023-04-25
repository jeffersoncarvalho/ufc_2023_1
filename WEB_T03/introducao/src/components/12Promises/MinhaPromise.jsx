import { useEffect } from "react"

const minhaPromise = new Promise(
    (resolve,reject)=>{
        //emulando uma computação demorada..
        setTimeout(
            ()=>{
                const x = 11
                if(x%2===0) resolve({numero:x,msg:"Deu tudo certo!"})
                else reject({numero:x,msg:"Deu tudo errado!"})               
            }
            ,
            3000
        )    
    }
)

function meuGet(url) {
    return minhaPromise
}

const MinhaPromise = () => {

    useEffect(
        ()=>{
            meuGet("http://...")
            .then(
                (response) => console.log(response)
            )
            .catch(
                (error) => console.log(error.numero)
            )
        }
        ,
        []
    )

    return (
        <>
            <h1>Testando promessa!</h1>
        </>
    )
}

export default MinhaPromise