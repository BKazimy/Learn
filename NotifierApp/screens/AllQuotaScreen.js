import { View, Text } from "react-native";
import { useState } from "react";

function AllQuote({ navigation }) {
    const [data, setdata] = useState([
        {
            id: 1,
            quote: "blah blah blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 2,
            quote: "blah blah blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 3,
            quote: "blah blah blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 4,
            quote: "blah blah blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 5,
            quote: "blah blah blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
    ])
    
    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('MealOverview', {
                id: itemData.id,
                
            });
        }
    
        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={pressHandler} 
        />;
    }
    
    return <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={1}
    />;
}

export default AllQuote;