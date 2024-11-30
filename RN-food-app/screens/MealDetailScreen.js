import { Image, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";

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

            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>ingredients:</Text>
            </View>
            {selectedMeal.ingredients.map(ingredient => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}

            <Text style={styles.subtitle}>Steps:</Text>
            {selectedMeal.steps.map(step => (
                <Text key={step}>{step}</Text>
            ))}
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

    detailText: {
        color: 'white',
    },

    subtitle: {
        color: '#',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    }
})