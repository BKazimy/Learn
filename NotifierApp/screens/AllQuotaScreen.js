import { FlatList } from "react-native";
import { useState } from "react";

import Display from "../components/display";
import CompButton from "../components/compButton";

function AllQuote({ navigation }) {
    const [data, setdata] = useState([
        {
            id: 1,
            quote: "Never eat the pitza with pinapple!",
            author: "Arthor Hill",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 2,
            quote: "blah blah blah",
            author: "Blah Blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 3,
            quote: "blah blah blah",
            author: "Blah Blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 4,
            quote: "blah blah blah",
            author: "Blah Blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
        {
            id: 5,
            quote: "blah blah blah",
            author: "Blah Blah",
            story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
        },
    ])
    
    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('quotePage', {
                quote: itemData.item.quote,
            });
        }
    
        return <CompButton
            title={itemData.item.quote}
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