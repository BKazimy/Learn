import { FlatList, StyleSheet } from "react-native";

import CompButton from "../components/compButton";
import { View } from "react-native-web";

async function AllQuote({ navigation, route }) {
    
    const { db } = route.params;
    const data = await db.getAll();
    console.log(data);

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('quotePage', {
                id: itemData.item.id,
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
                data={data} 
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