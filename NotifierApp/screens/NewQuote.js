import { View, StyleSheet } from "react-native";

// components
import Form from '../components/form';

function NewQuote({ navigation, route }) {
  const { db } = route.params;

  async function newQuoteHandler(quote, author, story = '', source) {
    try {
      const newEntry = await db.add({
        quote,
        author,
        story,
        source,
      });
      navigation.navigate('quotePage', { id: newEntry.id }); // Fixed typo
    } catch (error) {
      console.error('Error using QuoteDatabase:', error);
      alert('Failed to save the quote. Please try again.'); // Optional user feedback
    }
  }

  async function onReset() {
    try {
      await db.reset();
      navigation.goBack(null);
    } catch (er) {
      console.log('Error:', er);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Form navigation={navigation} newQuoteHandler={newQuoteHandler} onReset={onReset} />
      </View>
    </View>
  );
}

export default NewQuote;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
})
