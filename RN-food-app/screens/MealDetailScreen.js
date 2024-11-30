import { Text } from "react-native";

function MealDetailScreen({ route }) {
    const mealId = route.params.id
    return <Text>This is the Meal Detail screen {id}!</Text>
}

export default MealDetailScreen;