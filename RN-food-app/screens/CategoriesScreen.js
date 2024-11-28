import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

import { FlatList } from 'react-native';

function renderCategoryItem(itemData) {
    function pressHandler() {

    }

    return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}
    />;
}

function CategoriesScreen({ navigation }) {
    return <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
    />;
}

export default CategoriesScreen;