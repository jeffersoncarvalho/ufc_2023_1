import { useDispatch } from "react-redux"
import { decrementar } from "./id/idSlice"

const BotaoDecrementar = () => {

    const despachante = useDispatch()

    return (
        <>
            <button onClick={()=>despachante(decrementar())}>
                ID - 1
            </button>
        </>
    )
}
export default BotaoDecrementar 