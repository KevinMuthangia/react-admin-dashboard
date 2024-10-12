import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/persistReduxStore";

const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    preloadedState: persistedState
});

// Save state to local storage after every action
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

// src/redux/store.ts
export type RootState = ReturnType<typeof store.getState>;

export default store