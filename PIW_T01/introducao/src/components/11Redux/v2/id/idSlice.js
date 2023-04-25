import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 65,
}

export const idSlice = createSlice({
    name:"id",
    initialState,
    reducers: {
        incrementar: (state)=>{state.value = state.value + 1},
        decrementar: (state,action)=>{state.value -= action.payload},
        incrementarValor: (state,action)=>{state.value += action.payload} 
    }
})

export const { incrementar, decrementar, incrementarValor} = idSlice.actions
export default idSlice.reducer
