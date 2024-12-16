import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

// components
import Display from '../components/display';
import QuotePost from '../components/quotePost';
import CompButton from '../components/compButton';

// utilities
import colors from '../utility/color';
// import { SendNotification } from '../utility/Notification';

function QuotePage({ route, navigation }) {
  const { db, id } = route.params;
  const [quoteData, setQuoteData] = useState(null); // State to store the fetched data

  useEffect(() => {
    // Add a listener for the 'beforeRemove' event
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Get the navigation state
      const state = navigation.getState();

      // Check the previous route, if any
      const previousRoute = state.routes[state.index - 1] || null; // Check if there's a previous route

      if (previousRoute?.name === 'newquote') {
        // Prevent the default back action
        e.preventDefault();
        navigation.navigate('home');
      } else {
        router.dismissAll();
      }
    });

    // Cleanup the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);

  const fetchData = async () => {
    try {
      let data;
      console.log('quote page id:', id);
      if (id >= 0) {
        data = await db.getById(id); // Fetch quote data
      } else {
        data = await db.getRandom(); // Fetch quote data
        // await SendNotification(data.quote, data.story, data.id);
      }
      setQuoteData(data); // Update state with fetched data

      // Set navigation options after fetching data
      navigation.setOptions({
        title: data.author || 'Quote',
      });
    } catch (error) {
      console.error('Error fetching quote data:', error);
    }
  };
  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [db, id, navigation]); // Dependencies

  // Show loading state until data is fetched
  if (!quoteData) {
    return <Display customStyle={styles.quotePost}>Loading...</Display>;
  }

  async function deleteHandle() {
    let id = quoteData.id;
    await db.delete(id);
    if (id == (await db.GetQuoteOfDay())) {
      await db.SetQuoteOfDay();
    }
    navigation.goBack(null);
    fetchData();
  }

  return (
    <>
      <Display customStyle={styles.quotePost}>
        <QuotePost
          id={quoteData.id}
          quote={quoteData.quote}
          author={quoteData.author}
          story={quoteData.story}
          source={quoteData.source}
        />
      </Display>
      <View style={styles.deleteButton}>
        <CompButton title="Delete" onPress={deleteHandle} />
      </View>
    </>
  );
}

export default QuotePage;

const styles = StyleSheet.create({
  quotePost: {
    height: 500,
    borderRadius: 12,
    backgroundColor: colors.darkOliveGreen,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: 'hidden',
    padding: 8,
  },
  deleteButton: {
    marginBottom: 8,
    marginHorizontal: 16,
  },
});
