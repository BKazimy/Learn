import React from 'react';
import Form from '../components/form';
import Display from '../components/display';

// import { addQuote } from '../tools/db';
import db from '../tools/db';

function NewQuote({ navigation }) {
  function newQuoteHandler(quote, author, story) {
    // addQuote(quote, author, story);
    console.log(quote);
    console.log(author);
    console.log(story);
  }

    return (
      <Display>
        <Form navigation={navigation} newQuoteHandler={newQuoteHandler}/>
      </Display>
    );
};

export default NewQuote;