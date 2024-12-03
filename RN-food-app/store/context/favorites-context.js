import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({childeren}) {
    const [favoritMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoritMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{childeren}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;