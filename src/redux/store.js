import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tokenSlice from "./reducers/tokenSlice";

const store = configureStore({
    reducer: {
        token: tokenSlice,
    },
    middleware: (curryGetDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;