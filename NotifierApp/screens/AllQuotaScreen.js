import { FlatList, StyleSheet } from "react-native";

import CompButton from "../components/compButton";
import db from "../tools/db";
import Entries from "../tools/data";
import { View } from "react-native-web";

function AllQuote({ navigation }) {
    
    const data = async () => await db.AllQuote();

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
        <View style={{ flex: 1 }}>
            <FlatList 
                data={Entries} 
                keyExtractor={(item) => item.id} 
                renderItem={renderCategoryItem}
                numColumns={1}
                contentContainerStyle={{paddingBottom: 10}}
                style={styles.flatlist}
                scrollEnabled={true}
            />
        </View>
    );
}

export default AllQuote;

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        marginVertical: 8,
    },
});