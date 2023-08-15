import { createAction, createSlice } from "@reduxjs/toolkit";
import { handleFetchNews } from "./handlers";

export const setLoading = createAction('setLoading');

const initialState = {
    hits: [],
    loading: true,
    errorMessage: "",
    query: "",
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchNews.fulfilled, (state, action) => {
                state.hits = action.payload;
                state.loading = false;
            })
            .addCase(handleFetchNews.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(handleFetchNews.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(setLoading, (state, action) => {
                state.loading = action.payload;
            });
    }
});

export default newsSlice.reducer;