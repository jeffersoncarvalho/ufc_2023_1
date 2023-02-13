import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { selectId } from "../slice/pokemonSlice"

const ImagemPokemon = () => {

    const [image,setImage] = useState("")
    let id = useSelector(selectId)

    useEffect(
        ()=>{

            axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
            .then(
                (response) => {
                    //console.log(response.data.sprites)
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
            <img src={image} alt="pokemon" style={{ width: '200px', }} />
        </div>
    )
}

export default ImagemPokemon