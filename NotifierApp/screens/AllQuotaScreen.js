import { FlatList, StyleSheet, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import IconButton from '../components/IconButton';

import CompButton from '../components/compButton';
import colors from '../utility/color';

function AllQuote({ navigation, route }) {
  const { db } = route.params;
  const [data, setData] = useState([]); // State for storing quotes
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [search, setSearch] = useState();
  const [searching, setSearching] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const quotes = await db.getAll(); // Fetch all quotes
        setData(quotes); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching quotes:', error);
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    };
    fetchData();
  }, [navigation, db]);

  function changeSearchIconHandler() {
    if (searching) {
      setSearching(null);
      setSearch();
    } else {
      setSearching(
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={styles.textInput}
          placeholder="Search Author:"
        />
      );
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButton}>
          <IconButton
            onPress={changeSearchIconHandler}
            icon={searching ? 'close-outline' : 'search-outline'}
            color={colors.khaki}
          />
        </View>
      ),
    });
  }, [navigation, searching, changeSearchIconHandler]);

  useEffect(() => {
    const searchAuthor = async () => {
      try {
        const quotes = await db.searchByAuthor(search); // Fetch all quotes
        setData(quotes); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching quotes:', error);
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    };

    searchAuthor();
  }, [search, db]); // Dependency array

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('quotePage', {
        id: itemData.item.id,
      });
    }

    return (
      <>
        {itemData.item.id}
        <CompButton
          title={itemData.item.quote}
          subtitle={itemData.item.author}
          onPress={pressHandler}
        />
      </>
    );
  }

  // Show a loading state while fetching data
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <CompButton title="Loading..." />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {searching}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Ensure `id` is a string
        renderItem={renderCategoryItem}
        numColumns={1}
        contentContainerStyle={{ paddingBottom: 10 }}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    color: colors.dark,
    fontSize: 18,
    padding: 10,
    backgroundColor: colors.khaki,
    marginHorizontal: 16,
    marginTop: 16,

    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 4, height: 2 },
    shadowRadius: 8,
  },

  headerButton: {
    padding: 10,
    marginRight: 8,
  },
});
