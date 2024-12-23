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
import { useContext, useEffect } from "react";
import IconButton from "../components/IconButton";

// import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
    // const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id == mealId);
    // const mealIdsFavorite = favoriteMealCtx.ids.includes(mealId);
    const mealIdsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIdsFavorite) {
            // favoriteMealCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
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
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image 
                style={styles.image}
                source={{uri: selectedMeal.imageUrl}} 
            />
            <Text style={styles.title}>{selectedMeal.title}:{favoriteMealIds}-</Text>
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