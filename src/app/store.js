import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../servises/cryptoApi";
import { cryptoNewsApi } from "../servises/cryptoNewsApi";


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    }
})