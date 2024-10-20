import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songSlice";
import artistReducer from "./artistSlice";

const appStore = configureStore(
    {
        reducer: {
            songs: songsReducer,
            artists: artistReducer,
        },
    }
)

export default appStore;