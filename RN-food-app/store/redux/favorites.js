import { createSlice } from "@reduxjs/toolkit";

favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push();
        },
        removeFavorite: (state) => {},
    }
});