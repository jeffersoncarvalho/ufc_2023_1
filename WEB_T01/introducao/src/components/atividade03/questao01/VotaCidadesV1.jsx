import { useState, useEffect } from "react"

const VotaCidades = () => {

    const [cidades, setCidades] = useState(
        [
            {nome:"Fortaleza", votos:0},
            {nome:"Quixadá", votos:0},
            {nome:"Sobral", votos:0},
            {nome:"Iguatu", votos:0}
        ]
    )
    
    const [objeto, setObjeto] = useState({nome:"Rio de Janeiro",votos:0})

    const [flag, setFlag] = useState(false)

    const votarNaCidade = (nome) => {
        /*for(let i=0;i<cidades.length;i++){
            if(cidades[i].nome === nome){
                cidades[i].votos = cidades[i].votos + 1
            }
        }*/

        const index = cidades.findIndex(
            (cidade)=> cidade.nome === nome
        )
        cidades[index].votos = cidades[index].votos + 1 
        //setCidades(cidades)
        //console.log(index)
        //console.log(cidades)
        setFlag((prev)=>!prev)
    }

    const votarNaCidadeV2 = (nome) => {

        const newCidades = cidades.map(
            (cidade)=>{
                if(cidade.nome === nome) return {...cidade,votos:cidade.votos+1}
                return {...cidade}
            }
        )

        setCidades(newCidades)
    }

    return (
        <>
            <h1>Vota Cidades</h1>
            <h3>{cidades[0].nome}: {cidades[0].votos}</h3>
            <h3>{cidades[1].nome}: {cidades[1].votos} </h3>
            <h3>{cidades[2].nome}: {cidades[2].votos} </h3>
            <h3>{cidades[3].nome}: {cidades[3].votos} </h3>
            <h3>{objeto.nome}: {objeto.votos} </h3>


            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={()=>votarNaCidadeV2("Fortaleza")}>
                                Fortaleza + 1
                            </button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV2("Quixadá")}>Quixadá + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV2("Sobral")}>Sobral + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV2("Iguatu")}>Iguatu + 1</button>
                        </td>
                        <td>
                            <button
                                onClick={
                                    ()=>{
                                        const newObjeto = {...objeto, votos:objeto.votos + 1}
                                        setObjeto(newObjeto)
                                    }
                                }
                            >Rio + 1</button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        </>
    )
}

export default VotaCidades