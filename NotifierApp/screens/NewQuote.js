import React from 'react';
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