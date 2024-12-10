import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import QuotePage from "./quotePage";
import Display from "../components/display";

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
            navigation.navigate('quotePage', {
                id: itemData.id,
                quote: itemData.quote,
                author: itemData.author,
                story: itemData.story
            });
        }
    
        return <QuotePage
            quote={itemData.quote}
            author={itemData.author}
            onPress={pressHandler} 
        />;
    }
    
    return ( 
        <Display>
            <FlatList 
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={renderCategoryItem}
                numColumns={1}
            />
        </Display>
    );
}

export default AllQuote;