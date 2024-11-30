import { 
    Image, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
    Button 
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id == mealId);

    function headerButtonPressHandler() {
        console.log("pressed!");
    }

    useLayoutEffect(() => {
        console.log('tapped');
        navigation.setOptions({
            headerRight: () => {
                return <Button 
                    title="Tap me" 
                    onPress={() => console.log("logged!")}
                />
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
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

            <View style={styles.listoutterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>ingredients:</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps:</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },

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

    listContainer: {
        width: '80%',
    },

    listoutterContainer: {
        alignItems: 'center',
    },

    detailText: {
        color: 'white',
    },

})