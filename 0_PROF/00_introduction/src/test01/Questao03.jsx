import { useEffect, useState } from "react"

const Questao03 = () => {

    const [maior, setMaior] = useState("")
    const [menor, setMenor] = useState("")

    useEffect(
        () => {
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                .then(
                    (response) => {
                        return response.json()
                    }
                )
                .then(
                    (data) => {
                       
                       let maior = data[0].population
                       let menor = data[0].population
                       let iMaior=0, iMenor = 0

                       for(let i=0;i<data.length;i++){
                        
                        if(data[i].population > maior){maior=data[i].population;iMaior=i}
                        if(data[i].population < menor){menor=data[i].population;iMenor=i}
                       }
                       
                       setMaior(data[iMaior].capital[0])
                       setMenor(data[iMenor].capital[0])
                    }
                )
                .catch(error => console.log(error))

        }
        ,
        []
    )

    return (
        <>
            <h1>Maior: {maior}</h1>
            <h1>Menor: {menor}</h1>
        </>
    )
}

export default Questao03