import { useEffect, useState } from "react"

const VotaCidades = () => {

    const [cidades, setCidades] = useState(
        [
            {nome:"Fortaleza",votos:0},
            {nome:"Quixadá",votos:0},
            {nome:"Sobral",votos:0},
            {nome:"Iguatu",votos:0}
        ]
    )

    const [meuObjeto, setMeuObjeto] = useState({nome:"São Paulo", votos:0}) 

    const [flag, setFlag] = useState(false)

    const votarNaCidade = (nome) => {
        const index = cidades.findIndex(
            (cidade) => {
                return cidade.nome === nome
            }
        )
        //console.log(index)

        cidades[index].votos = cidades[index].votos + 1
        //console.log(cidades[index].votos)
        //setCidades(cidades)
        setFlag((previousFlag)=>!previousFlag)
    }

    const votarNaCidadeV1 = (nome) => {
        const newCidades = cidades.map(
            (cidade) => {
                if(cidade.nome === nome) return {...cidade, votos:cidade.votos+1}
                return cidade
            }
        )
        setCidades(newCidades)
    }

    return (
        <>
            <h1>Votação de Cidades</h1>
            <h3>{cidades[0].nome}: {cidades[0].votos}</h3>
            <h3>{cidades[1].nome}: {cidades[1].votos} </h3>
            <h3>{cidades[2].nome}: {cidades[2].votos} </h3>
            <h3>{cidades[3].nome}: {cidades[3].votos} </h3>
            <h3>{meuObjeto.nome}: {meuObjeto.votos}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={()=>votarNaCidadeV1("Fortaleza")}>
                                Fortaleza +1
                            </button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV1("Quixadá")}>Quixadá +1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV1("Sobral")}>Sobral +1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidadeV1("Iguatu")}>Iguatu +1</button>
                        </td>
                        <td>
                            <button
                                onClick={
                                    ()=>{
                                        setMeuObjeto(
                                            (prevObj) => {
                                                return {...prevObj,votos:prevObj.votos + 1}
                                            })
                                    }
                                }
                            >
                                São Paulo +1
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}
export default VotaCidades