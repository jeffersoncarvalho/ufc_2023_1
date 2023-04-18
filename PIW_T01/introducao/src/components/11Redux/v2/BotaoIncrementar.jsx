import { useDispatch } from "react-redux"
import { incrementar } from "./id/idSlice"

const BotaoIncrementar = () => {

    const despachante = useDispatch()

    return (
        <>
            <button onClick={()=>despachante(incrementar())}>
                ID + 1
            </button>
        </>
    )
}
export default BotaoIncrementar 