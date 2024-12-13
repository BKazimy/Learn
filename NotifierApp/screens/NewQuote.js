import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// components
import Form from '../components/form';
import Display from '../components/display';

function NewQuote({ navigation, route }) {
  const { db } = route.params;

  
  useFocusEffect(
    useCallback(() => {
      const state = navigation.getState();
      console.log('Navigation State:', state);
  
      // Ensure we safely access the previous route
      const previousRoute = state.routes[state.index - 1] || null;

      if (previousRoute) {
        console.log('Came from Route:', previousRoute.name);
        if (previousRoute.name === 'quotePage') {
          navigation.navigate('home');
        }
      } else {
        console.log('No previous route. This might be the initial screen.');
      }
    }, [navigation])
  );

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
