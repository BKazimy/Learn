import { Image, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find

    return (
        <View>
            <Image  />
            <View>
                <Text>ingredients:</Text>
                <Text>Steps: </Text>
            </View>
        </View>
    );
}

export default MealDetailScreen;