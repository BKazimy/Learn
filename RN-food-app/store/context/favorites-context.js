import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({childeren}) {
    const [favoritMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds
    }

    return <FavoritesContext.Provider>{childeren}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;