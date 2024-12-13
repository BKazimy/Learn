// import 

// components
import Form from '../components/form';
import Display from '../components/display';

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
      console.log('Added Quote:', newEntry);
      navigation.navigate('quotePage', { id: newEntry.id }); // Fixed typo
    } catch (error) {
      console.error('Error using QuoteDatabase:', error);
      alert('Failed to save the quote. Please try again.'); // Optional user feedback
    }
  }

  return (
    <Display>
      <Form navigation={navigation} newQuoteHandler={newQuoteHandler} />
    </Display>
  );
}

export default NewQuote;
