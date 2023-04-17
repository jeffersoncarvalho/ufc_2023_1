import { useDispatch } from "react-redux"
import { decrementar } from "./slices/idSlice"

const BotaoDecrementar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <button
                onClick={()=>dispatch(decrementar())}
            >
                ID - 1
            </button>
        </>
    )
}
export default BotaoDecrementar