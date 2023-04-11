import { useState, useEffect } from "react"

const nomes = ["Fortaleza", "Sobral", "Quixadá", "Iguatu"]

const VotaCidades = () => {

    
    const [cidades, setCidades] = useState([0,0,0,0])
    const [mais, setMais] = useState("")
    const [menos, setMenos] = useState("")
    const [flag, setFlag] = useState(false)

    useEffect(
        ()=>{
            let maior = cidades[0]
            let menor = cidades[0]
            for(let i=1;i<cidades.length;i++){
                if (cidades[i] > maior) maior = cidades[i]
                if (cidades[i] < menor) menor = cidades[i]
            }

            setMais("")
            setMenos("")
            console.log(maior + " " + menor)
            for(let i=0;i<cidades.length;i++){
                if (cidades[i] === maior) setMais((prev)=>prev + " " + nomes[i])
                if (cidades[i] === menor) setMenos((prev)=>prev + " " + nomes[i])
            }

        }
        ,
        [cidades,flag]
    )

    return (
        <>
            <h1>Vota Cidades</h1>
            <h3>Fortaleza {cidades[0]}</h3>
            <h3>Sobral {cidades[1]}</h3>
            <h3>Quixadá {cidades[2]}</h3>
            <h3>Iguatu {cidades[3]}</h3>
            
            <table>
                <tbody>
                <tr>
                    <td>
                        <button onClick={()=>
                            {
                                setCidades(
                                    (cidadesAnt)=>{
                                        cidadesAnt[0]=cidadesAnt[0]+1;
                                        return cidadesAnt
                                    }
                                );
                                setFlag(!flag)
                            }
                        }>Fortaleza + 1</button>
                    </td>
                    <td>
                        <button onClick={()=>{setCidades((cidadesAnt)=>{cidadesAnt[1]=cidadesAnt[1]+1;return cidadesAnt});setFlag(!flag)}}>Sobral + 1</button>
                    </td>
                    <td>
                        <button onClick={()=>{setCidades((cidadesAnt)=>{cidadesAnt[2]=cidadesAnt[2]+1;return cidadesAnt});setFlag(!flag)}}>Quixadá + 1</button>
                    </td>
                    <td>
                        <button onClick={()=>{setCidades((cidadesAnt)=>{cidadesAnt[3]=cidadesAnt[3]+1;return cidadesAnt});setFlag(!flag)}}>Iguatu + 1</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <h1>Mais: {mais}</h1>
            <h1>Menos: {menos}</h1>
        </>
    )

}

export default VotaCidades