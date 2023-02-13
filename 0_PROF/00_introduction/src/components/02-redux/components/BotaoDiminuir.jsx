import { diminuir } from "../slice/pokemonSlice"
import { useDispatch} from "react-redux"

const BotaoDiminuir = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button
             onClick={ ()=> dispatch(diminuir())}
            >
                Diminuir -
            </button>
        </div>
    )
}

export default BotaoDiminuir