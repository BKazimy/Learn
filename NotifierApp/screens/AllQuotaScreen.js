import { FlatList } from "react-native";

import Display from "../components/display";
import CompButton from "../components/compButton";
// import db from "../tools/db";
import Entries from "../tools/data";

function AllQuote({ navigation }) {
    
    // const data = async () => await db.AllQuote();

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
            subtitle={itemData.item.author}
            onPress={pressHandler} 
        />;
    }
    
    return ( 
        <Display customStyle={{flex: 1}}>
            <FlatList 
                data={Entries} 
                keyExtractor={(item) => item.id} 
                renderItem={renderCategoryItem}
                numColumns={1}
                contentContainerStyle={{
                    paddingBottom: 10,
                    height: '90%',
                }}
            />
        </Display>
    );
}

export default AllQuote;