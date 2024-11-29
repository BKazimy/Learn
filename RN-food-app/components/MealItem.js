import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageURL, duration, complexity, affordability }) {
    return (
        <View>
            <Pressable>
                <View style={styles.mealItem}>
                    <Image source={{uri: imageURL}} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },

    
})