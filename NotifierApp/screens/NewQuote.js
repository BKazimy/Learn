import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

function NewQuote() {
  const [quote, setQuoteValue] = React.useState();
  const [story, setStory] = React.useState();
  const [author, setAuthor] = React.useState();

  // If you type something in the text box that is a color,
  // the background will change to that color.
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: value,
          },
        ]}>
        <TextInput
          onChangeText={text => setQuoteValue(text)}
          value={quote}
          style={styles.textInput}
          placeholder='Quote:'
          autoFocus
        />
        <TextInput
          editable
          multiline
          numberOfLines={20}
          maxLength={500}
          onChangeText={text => setStory(text)}
          value={story}
          style={styles.textInput}
          placeholder='Example Story:'
        />
        <TextInput
          onChangeText={text => setAuthor(text)}
          value={author}
          style={styles.textInput}
          placeholder='Author:'
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.khaki
  },
});

export default NewQuote;