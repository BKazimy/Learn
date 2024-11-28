import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen(){ //{ route }) {
    // const route = ;
    const catId = useRoute().route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    function renderMealItem(itemData) {
        return <View><Text>text!</Text></View>
        // return <MealItem title={itemData.item.title} />
    }

    return (
        <View style={styles.container}>
            <Text>text!</Text>
            {/* <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            /> */}
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})