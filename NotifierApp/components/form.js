import { TextInput } from "react-native";

function Form({ edit }) {
    
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
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: quoteValue,
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

        <Submission
            onCancel={onCancel}
            onSave={onSave}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}