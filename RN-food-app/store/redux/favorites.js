import { createSlice } from "@reduxjs/toolkit";

favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, ) => {
            state.ids.push();
        },
        removeFavorite: (state) => {},
    }
});