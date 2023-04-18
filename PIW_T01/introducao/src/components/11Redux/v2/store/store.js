import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../id/idSlice"

export const store = configureStore(
    {
        reducer:{
            id:idReducer
        }
    }
)