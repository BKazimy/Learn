import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";


function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    return <View style={styles.container}>
        <FlatList 
            data={MEALS}
            
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