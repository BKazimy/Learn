import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    // const displayedMeals = MEALS.categoryIds.filter.indexOf(catId) >= 0;

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: itemData.item.title,
            imageURL: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
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