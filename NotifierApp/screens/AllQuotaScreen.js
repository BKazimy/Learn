import { FlatList } from "react-native";

import Display from "../components/display";
import CompButton from "../components/compButton";
// import db from "../tools/db";
import Entries from "../tools/data";

function AllQuote({ navigation }) {
    
    // const data = async () => await db.AllQuote();

    const data = 

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('quotePage', {
                id: itemData.item.id,
                quote: itemData.item.quote,
                author: itemData.item.author,
                story: itemData.item.story,
                source: itemData.item.source
            });
        }
    
        return <CompButton
            title={itemData.item.quote}
            subtitle={[itemData.item.author, itemData.item.source]}
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