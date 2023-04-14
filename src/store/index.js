import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./reducers";

const store = configureStore({
    reducer: {
        item: itemSlice
    }
})

export default store;