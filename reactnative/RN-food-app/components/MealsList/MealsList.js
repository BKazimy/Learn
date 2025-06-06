import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";


function MealsList({items}) {
    
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageURL: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,
        }
        return (
            <MealItem {...mealItemProps} />
        );
    }

    return <View style={styles.container}>
        <FlatList 
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}

        />
    </View>
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})