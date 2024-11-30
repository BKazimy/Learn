import { Image, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id == mealId);

    return (
        <View>
            <Image 
                style={styles.image}
                source={{uri: selectedMeal.imageUrl}} 
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.detailCoontainer}>
                <Subtitle>ingredients:</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps:</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },

    detailCoontainer: {
        flex: 1,
    },

    detailText: {
        color: 'white',
    },

})