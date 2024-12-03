import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    remove
});