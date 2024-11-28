import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";


function MealsOverviewScreen(){ //{ route }) {
    // const route = ;
    const catId = useRoute().route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds
    })

    return <View style={styles.container}>
        <Text>Meals Overview Screen! #{catId}</Text>
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})