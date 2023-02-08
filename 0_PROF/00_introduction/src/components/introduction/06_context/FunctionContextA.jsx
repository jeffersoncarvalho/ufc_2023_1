import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    return (
         <ColorTheme.Provider value="green">
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA