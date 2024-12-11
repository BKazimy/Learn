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
            <FlatList 
                data={Entries} 
                keyExtractor={(item) => item.id} 
                renderItem={renderCategoryItem}
                numColumns={1}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.flatlist}
                scrollEnabled={true}
            />
    );
}

export default AllQuote;

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingBottom: 10,
        borderColor: 'black',
        borderWidth: 2,
    },
    flatlist: {
        flex: 1,
    },
});