import { View, Text, Pressable } from "react-native";

function MealItem({ title }) {
    return (
        <View>
            <Pressable>
            <Text>{title}</Text>
            </Pressable>
        </View>
    );
}

export default MealItem;