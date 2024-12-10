import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { View } from 'react-native-web';
import CompButton from '../components/compButton';
import Submission from '../components/submission';
import Form from '../components/form';

// import { addQuote } from '../tools/db';

function NewQuote({ navigation }) {
  function newQuoteHandler(quote, author, story) {
    // addQuote(quote, author, story);
    console.log(quote);
    console.log(author);
    console.log(story);
    
  }

    return (
      <Form navigation={navigation} newQuoteHandler={newQuoteHandler}/>
    );
};

export default NewQuote;