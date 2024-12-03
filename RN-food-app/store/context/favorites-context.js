import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({childeren}) {
    useState

    return <FavoritesContext.Provider>{childeren}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;