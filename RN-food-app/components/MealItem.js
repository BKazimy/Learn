import { View, Text, Pressable, Image } from "react-native";

function MealItem({ title }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri}} />
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;