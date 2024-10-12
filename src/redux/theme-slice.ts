import { createSlice } from "@reduxjs/toolkit";
import { Event } from "../lib/types";

const initialState = {
    mode: "dark",
    isSidebarOpen: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark" 
        },
        toggleSidebarOpen: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
    }
});

export const { toggleMode, toggleSidebarOpen } = themeSlice.actions;

export default themeSlice.reducer;