import React, { useCallback, useLayoutEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// components
import Form from '../components/form';
import Display from '../components/display';

function NewQuote({ navigation, route }) {
  const { db } = route.params;

  useLayoutEffect(() => {
      const state = navigation.getState();
      const previousRoute =
        state.routes[state.index - 1] || null; // Check if there's a previous route

      console.log('previous Route:', previousRoute.name);
      if (previousRoute.name == 'quotePage') {
        console.log('Came from Route:', previousRoute.name);
        navigation.navigate('home');
      } else {
        console.log('No previous route. This might be the initial screen.');
      }
  }, [])

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
