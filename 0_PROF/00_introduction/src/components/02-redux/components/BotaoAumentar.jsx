import { aumentar } from "../slice/pokemonSlice"
import { useDispatch} from "react-redux"

const BotaoAumentar = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={ ()=> dispatch(aumentar())}
            >
                Aumentar +
            </button>
        </div>
    )
}

export default BotaoAumentar