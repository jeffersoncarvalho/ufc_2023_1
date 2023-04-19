import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 150,
}

export const idSlice = createSlice({
    name:"id",
    initialState,
    reducers: {}
})

export default idSlice.reducer