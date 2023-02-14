import { useState } from "react"
import { aumentarQuantidade } from "../slice/pokemonSlice"
import { useDispatch} from "react-redux"

const AumentarQuantidade = () => {

    const dispatch = useDispatch();
    const [qtd, setQtd] = useState(0)

    return (
        <div>
            <input
                type="number"
                placeholder="Digite a Quantidade"
                value={qtd}
                onChange={
                    (event) => {
                        setQtd(event.target.value)
                    }
                }
            />
            <button
                onClick={()=>dispatch(aumentarQuantidade(Number(qtd)))}
            >
                Aumentar Quantidade
            </button>
        </div>
    )
}

export default AumentarQuantidade