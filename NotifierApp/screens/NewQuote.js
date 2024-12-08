import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

function NewQuote() {
  const [quoteValue, setQuoteValue] = React.useState();
  const [StoryValue, setStoryValue] = React.useState();
  const [authorValue, setAuthorValue] = React.useState();

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
          value={quoteValue}
          style={styles.textInput}
          placeholder='Quote:'
        />
        <TextInput
          editable
          multiline
          numberOfLines={20}
          maxLength={500}
          onChangeText={text => setStoryValue(text)}
          value={StoryValue}
          style={styles.textInput}
          placeholder='Example Story:'
        />
        <TextInput
          onChangeText={text => setAuthorValue(text)}
          value={authorValue}
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