import { Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
    const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id));
    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = Style