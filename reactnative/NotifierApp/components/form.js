import { TextInput, StyleSheet, View } from 'react-native';
import { useState } from "react";

import Submission from './submission';
import CompButton from './compButton';


function Form({ navigation, newQuoteHandler, edit, onReset }) {
  const [quoteValue, setQuoteValue] = useState();
  const [storyValue, setStoryValue] = useState();
  const [authorValue, setAuthorValue] = useState();
  const [sourceValue, setSourceValue] = useState();

  if (edit) {
    setAuthorValue(edit.author);
    setStoryValue(edit.story);
    setQuoteValue(edit.quote);
  }

  function onSave() {
    newQuoteHandler(quoteValue, authorValue, storyValue, sourceValue);
  }

  function onCancel() {
    setAuthorValue();
    setStoryValue();
    setQuoteValue();
    setSourceValue();

    navigation.navigate('home');
  }

  return (
      <View>
          <TextInput
            onChangeText={(text) => setQuoteValue(text)}
            value={quoteValue}
            style={styles.textInput}
            placeholder="Quote:"
          />
          <TextInput
            editable
            multiline
            numberOfLines={10}
            maxLength={500}
            onChangeText={(text) => setStoryValue(text)}
            value={storyValue}
            style={styles.textInput}
            placeholder="Example Story:"
          />
          <TextInput
            onChangeText={(text) => setAuthorValue(text)}
            value={authorValue}
            style={styles.textInput}
            placeholder="Author:"
          />
          <TextInput
            onChangeText={(text) => setSourceValue(text)}
            value={sourceValue}
            style={styles.textInput}
            placeholder="Source:"
          />

          <View style={styles.buttons}>
            <Submission onCancel={onCancel} onSave={onSave} />
            <CompButton
              title="Reset Database To Initial"
              onPress={onReset}
            />
          </View>
      </View>
  );
}

export default Form;

const styles = StyleSheet.create({

  textInput: {
    color: colors.dark,
    fontSize: 18,
    padding: 10,
    margin: 10,
    backgroundColor: colors.khaki,

    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  buttons: {
  },
});

