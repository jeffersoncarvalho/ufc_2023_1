import { useEffect, useState } from "react"
import MinhaPromise from "./MinhaPromise"


const minhaPromise = new Promise(
    (resolve,reject) => {
        //alguma lógica que está produzindo algo e que demora algum tempo
        //console.log("iniciando a lógica")
        setTimeout(
            async ()=>{
                //console.log("lógica terminada")
                const meuInt = 10
                //console.log(meuInt)
                if(meuInt%2===0) resolve({numero:meuInt,msg:"Deu tudo certo!"})
                else reject({numero:meuInt,msg:"Deu tudo errado!"})
            }
            ,
            3000
        )
    }
)

const MeuAwait = () => {

    const [loading, setLoading] = useState(false)

    async function meuGet(url){
        try{
            const resposta = await minhaPromise
            //console.log(resposta)
            return resposta
        }catch(error){
            console.log(error)
        }finally{
            console.log("FIM FINALLY")
            setLoading(false)
        }
        
    }

    useEffect(
        ()=>{
            /*meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))*/
            console.log("INÍCIO...")
            setLoading(true)
            meuGet("http:...")
            .then((x)=>console.log(x.numero))
            console.log("FIM...")
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
                <h1>Testando o Await!</h1>
            </>
        )
    }

    return (
        <>
            {renderizar()}            
        </>
    )
}
export default MeuAwait