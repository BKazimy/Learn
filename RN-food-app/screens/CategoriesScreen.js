import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

import { FlatList } from 'react-native';

function CategoriesScreen({ navigation }) {

    
    return <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
    />;
}

export default CategoriesScreen;