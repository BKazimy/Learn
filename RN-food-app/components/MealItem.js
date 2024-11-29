import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageURL }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageURL}} />
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'b'
    }
})