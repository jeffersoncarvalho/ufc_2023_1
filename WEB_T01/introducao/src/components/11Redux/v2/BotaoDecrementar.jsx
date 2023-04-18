import { useDispatch } from "react-redux"
import { decrementar } from "./slices/idSlice"
import { useSelector } from "react-redux" 


const BotaoDecrementar = () => {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.id.value)
    
    const logicaDecrementar = () => {
        if((id-1) < 1) return
        dispatch(decrementar())
    }

    return (
        <>
            <button
                onClick={logicaDecrementar}
            >
                ID - 1
            </button>
        </>
    )
}
export default BotaoDecrementar