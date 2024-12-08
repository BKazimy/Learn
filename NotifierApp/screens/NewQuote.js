import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { View } from 'react-native-web';
import CompButton from '../components/compButton';
import Submission from '../components/submission';
import Form from '../components/form';

function NewQuote({ navigation }) {
    const [quoteValue, setQuoteValue] = React.useState();
    const [storyValue, setStoryValue] = React.useState();
    const [authorValue, setAuthorValue] = React.useState();
  
    if (edit) {
      setAuthorValue(edit.author);
      setStoryValue(edit.story);
      setQuoteValue(edit.quote);
    }
  
    function onSave() {
      console.log(quoteValue);
      console.log(authorValue);
      console.log(storyValue);
  
      navigation.navigate('home');
    }
  
    function onCancel() {
      setAuthorValue();
      setStoryValue();
      setQuoteValue();
  
      navigation.navigate('home');
    }
  
    // If you type something in the text box that is a color,
    // the background will change to that color.
    return (
      <Form 
      />
    );
};

export default NewQuote;