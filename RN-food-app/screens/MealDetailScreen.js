import { 
    Image, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import { useCallback, useContext, useEffect } from "react";
import IconButton from "../components/IconButton";

import { FavoritesContext } from '../store/context/favorites-context';
import { useNavigation } from "@react-navigation/native";

function MealDetailScreen({ route }) {
    const navigation = useNavigation();

    const favoriteMealCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id == mealId);
    const mealIdsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        console.log("pressed!")
        if (mealIdsFavorite) {
            favoriteMealCtx.removeFavorite(mealId);
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View>
                <IconButton 
                    onPress={changeFavoriteStatusHandler} 
                    icon={mealIdsFavorite ? 'star' : 'star-outline'}
                    color="white"
                />
                </View>
            ),
        });
    }, [navigation, changeFavoriteStatusHandler, mealIdsFavorite]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image 
                style={styles.image}
                source={{uri: selectedMeal.imageUrl}} 
            />
            <Text style={styles.title}>{selectedMeal.title} {mealIdsFavorite ? 'True' : 'False'}-</Text>
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