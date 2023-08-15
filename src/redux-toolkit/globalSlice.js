const { createSlice } = require("@reduxjs/toolkit");

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        darkMode: false,
        showSidebar: true,
    },
    reducers: {
        toggleDarkMode: (state, action) => ({
            ...state,
            darkMode: action.payload
        }), 
        toggleSidebar: (state, action) => ({
            ...state,
            showSidebar: action.payload
        }) 
    }
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;