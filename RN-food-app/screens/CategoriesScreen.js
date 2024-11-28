import { CATEGORIES } from '../data/dummy-data'

import { FlatList } from 'react-native';

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} />;
}

export default CategoriesScreen;