import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageURL }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageURL}} style={styles.image} />
                    {/* <Text >{imageURL}</Text> */}
                    <Text style={styles.title}>{title}</Text>
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
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
})