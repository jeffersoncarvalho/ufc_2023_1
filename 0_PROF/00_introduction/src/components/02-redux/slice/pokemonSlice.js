import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: "id",
    initialState: {
        value: 10
    },

    reducers: {
        aumentar: (state) => {
            state.value += 1
        },
        diminuir: (state) => {
            state.value -= 1
        },
        aumentarQuantidade: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { aumentar, diminuir, aumentarQuantidade } = idSlice.actions
export const selectId = (state) => state.id.value
export default idSlice.reducer