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
        }
    }
})

export const { aumentar, diminuir } = idSlice.actions
export const selectId = (state) => state.id.value
export default idSlice.reducer