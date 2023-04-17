import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 500 }

export const idSlice = createSlice({
    name:"id",
    initialState,
    reducers: {
        incrementar:(state)=>{ state.value += 1 },
        decrementar:(state)=>{ state.value -= 1 }
    }
})

export const { incrementar, decrementar} = idSlice.actions
export default idSlice.reducer

