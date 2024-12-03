import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";


function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    // const displayedMeals = MEALS.categoryIds.filter.indexOf(catId) >= 0;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;
        
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [catId, navigation]);

}

export default MealsOverviewScreen;
