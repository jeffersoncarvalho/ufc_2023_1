import { useEffect, useState } from "react"
let numero = 1

const VotaCidades = () => {

   

    const [cidades, setCidades] = useState(
        [
            {nome:"Fortaleza", votos:0},
            {nome:"Quixadá", votos:0},
            {nome:"Sobral", votos:0},
            {nome:"Iguatu", votos:0}
        ]
    )

    const [flag, setFlag] = useState(false)

    const votarNaCidade = (nome) => {
        /*for(let i=0;i<cidades.length;i++){
            if(cidades[i].nome === nome) cidades[i].votos = cidades[i].votos + 1
        }*/
        const index = cidades.findIndex(
            (item) => item.nome === nome
        )
        //console.log(index)
        cidades[index].votos += 1
        //console.log(cidades)
        numero = numero + 10
        console.log(numero)
        setFlag((flagAnterior)=>!flagAnterior)
        //setCidades(cidades)
        //console.log(cidades)
    }

    const votarNaCidadeV2 = (nome) => {
        /*const newCidades = cidades.map(
            (item) => {
                if(item.nome === nome) return {...item, votos: item.votos + 1}
                return {...item}
            }
        )*/
        const newCidades = cidades.map(
            (item) => {
                if(item.nome === nome) 
                    item.votos += 1
                return item
            }
        )
        console.log(cidades[0].votos)
        setCidades(newCidades)
    }

    return (
        <>
            <h1>Vota Cidades {numero}</h1>
            <h3>{cidades[0].nome}: {cidades[0].votos}</h3>
            <h3>{cidades[1].nome}: {cidades[1].votos} </h3>
            <h3>{cidades[2].nome}: {cidades[2].votos} </h3>
            <h3>{cidades[3].nome}: {cidades[3].votos} </h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={()=>votarNaCidade("Fortaleza")}>Fortaleza + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidade("Quixadá")}>Quixadá + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidade("Sobral")}>Sobral + 1</button>
                        </td>
                        <td>
                            <button onClick={()=>votarNaCidade("Iguatu")}>Iguatu + 1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default VotaCidades