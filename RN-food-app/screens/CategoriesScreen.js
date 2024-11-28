import { CATEGORIES } from '../data/dummy-data'

import { FlatList } from 'react-native';

function renderCategoryItem(item) {
    return 
}

function CategoriesScreen() {
    return <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        re
    />;
}

export default CategoriesScreen;