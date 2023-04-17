import { useDispatch } from "react-redux"
import { incrementar } from "./slices/idSlice"

const BotaoIncrementar = () => {
    const dispatch = useDispatch()

    return (
        <>
            <button
                onClick={()=>dispatch(incrementar())}
            >
                ID + 1
            </button>
        </>
    )
}
export default BotaoIncrementar