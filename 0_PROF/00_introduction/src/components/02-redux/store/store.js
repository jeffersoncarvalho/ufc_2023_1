import { configureStore } from "@reduxjs/toolkit";
import  idSlice  from "../slice/pokemonSlice";

export default configureStore({
    reducer: {
        id: idSlice
    }
})