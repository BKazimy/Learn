import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";


function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter.indexOf(catId) >= 0;

    return <View style={styles.container}>
        <FlatList 
            data={displayedMeals}
            keyExtractor={(item) => item.id}

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