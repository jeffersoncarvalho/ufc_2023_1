import { configureStore } from "@reduxjs/toolkit"
import idReducer from "./slices/idSlice"

export const store = configureStore(
    {
        reducer: {
            id: idReducer
        }
    }
)