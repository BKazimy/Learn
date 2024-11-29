import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    // const displayedMeals = MEALS.categoryIds.filter.indexOf(catId) >= 0;

    useEffect(() => {
        
    })
    const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;

    navigation.setOptions({
        title: categoryTitle,
    });

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageURL: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,
        }
        return (
            <MealItem {...mealItemProps} />
        );
    }

    return <View style={styles.container}>
        <FlatList 
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}

        />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})