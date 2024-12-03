import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({childeren}) {
    return <FavoritesContext.Provider>{childeren}</FavoritesContext.Provider>;
}