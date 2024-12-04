import { createSlice } from "@reduxjs/toolkit";

favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    }
});