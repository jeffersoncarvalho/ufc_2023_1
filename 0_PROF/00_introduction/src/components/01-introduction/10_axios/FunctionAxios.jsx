import { useState, useEffect } from "react"
import axios from "axios"

const FunctionAxios = () => {
    
    const [id,setId] = useState(10)
    const [name,setName] = useState("")
    const [image,setImage] = useState("")

    useEffect(
        ()=>{

            axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
            .then(
                (response) => {
                    //console.log(response.data.sprites)
                    setName(response.data.name)
                    setImage(response.data.sprites.front_default)
                }
            )
            .catch(error=>console.log(error))

        }
        ,
        [id]
    )

    return (
        <div>
            <h1>ID: {id}</h1>
            <h1>Nome: {name.toUpperCase()}</h1>
            <img src={image} alt="pokemon" style={{ width: '200px', }}/>
            <button
                onClick={()=>setId(id+1)}
            >
                Aumentar ID
            </button>
            <button
                onClick={()=>setId(id-1)}
            >
                Dimunuir ID
            </button>
        </div>
    )
}

export default FunctionAxios