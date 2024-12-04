import { createSlice } from "@reduxjs/toolkit";

favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state) => {
            
        },
        removeFavorite: (state) => {},
    }
});