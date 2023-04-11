import { useEffect, useState } from "react"

const VotaCidades = () => {

    const [fortaleza, setFortaleza] = useState(0)
    const [quixada, setQuixada] = useState(0)
    const [sobral, setSobral] = useState(0)
    const [iguatu, setIguatu] = useState(0)

    const [mais, setMais] = useState("")
    const [menos, setMenos] = useState("")

    useEffect(
        ()=>{
            const cidades = [fortaleza,quixada,sobral,iguatu]
            const nomes = ["Fortaleza","Quixadá","Sobral","Iguatu"]
            let maior = Math.max(...cidades)
            let menor = Math.min(...cidades)
            //console.log(maior + " " + menor)
            setMais("")
            setMenos("")
            for(let i=0;i<cidades.length;i++){
                if(cidades[i] === maior ) setMais((anterior)=>anterior + " " + nomes[i])
                if(cidades[i] === menor ) setMenos((anterior)=>anterior + " " + nomes[i])
            }
        }
        ,
        [fortaleza, quixada, sobral, iguatu]
    )

    return (
        <>
            <h1>Votação de Cidades</h1>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Quixadá: {quixada}</h3>
            <h3>Sobral: {sobral}</h3>
            <h3>Iguatu: {iguatu}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button
                                onClick={
                                    ()=>setFortaleza((anterior) => anterior + 1)
                                }
                            >
                                Fortaleza +1
                            </button>
                        </td>
                        <td>
                            <button onClick={()=>setQuixada((anterior)=>anterior + 1)} >Quixadá +1</button>
                        </td>
                        <td>
                            <button onClick={()=>setSobral((anterior)=>anterior + 1)}>Sobral +1</button>
                        </td>
                        <td>
                            <button onClick={()=>setIguatu((anterior)=>anterior + 1)}>Iguatu +1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Mais Votada(s): {mais}</h3>
            <h3>Menos Votada(s): {menos}</h3>
        </>
    )
}
export default VotaCidades