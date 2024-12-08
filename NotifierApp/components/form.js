import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Submission from '../components/submission';
import { View } from 'react-native-web';

function Form({ navigation, edit }) {
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
      <SafeAreaProvider style={styles.rootContainer}>
        <SafeAreaView style={styles.container}>
          <TextInput
            onChangeText={text => setQuoteValue(text)}
            value={quoteValue}
            style={styles.textInput}
            placeholder='Quote:'
          />
          <TextInput
            editable
            multiline
            numberOfLines={10}
            maxLength={500}
            onChangeText={text => setStoryValue(text)}
            value={storyValue}
            style={styles.textInput}
            placeholder='Example Story:'
          />
          <TextInput
            onChangeText={text => setAuthorValue(text)}
            value={authorValue}
            style={styles.textInput}
            placeholder='Author:'
          />
  
            <View style={styles.buttons}>
                <Submission
                    onCancel={onCancel}
                    onSave={onSave}
                />
            </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

  container: {
    // alignItems: 'center',
    width: '70%',
    maxWidth: 720,
  },

  textInput: {
    padding: 10,
    margin: 15,
    backgroundColor: colors.khaki
  },

  buttons: {
    flex: 1,
    // height: 20,
    width: '100%',

    borderColor: 'red',
    borderWidth: 1,
  }
});

export default Form;