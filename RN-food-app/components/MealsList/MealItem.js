import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../mealDetails";

function MealItem({ id, title, imageURL, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate("MealDetail", {
            mealId:  id,
        })
    };
    
    return (
        <View style={styles.mealItem}>
            <Pressable 
                onPress={pressHandler}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            >
                <View>
                    <View>
                        <Image source={{uri: imageURL}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
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
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },

    buttonPressed: {
        opacity: 0.75,
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
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
})