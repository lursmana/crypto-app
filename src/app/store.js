import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../servises/cryptoApi";


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    }
})