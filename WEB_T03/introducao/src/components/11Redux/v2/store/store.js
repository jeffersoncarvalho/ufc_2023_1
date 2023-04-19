
import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../slice/idSlice"

export const store = configureStore({
    reducer: {
        id: idReducer
    }
}) 