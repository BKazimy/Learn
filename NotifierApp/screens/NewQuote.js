import React from 'react';
import Form from '../components/form';
import Display from '../components/display';

// import { addQuote } from '../tools/db';
import db from '../tools/db';

function NewQuote({ navigation }) {
  async function newQuoteHandler(quote, author, story) {
    // addQuote(quote, author, story);
    console.log(quote);
    console.log(author);
    console.log(story);

    try {
      const newentry = await db.add({
        quote: quote,
        author: author,
        story: story,
      });
      console.log('Added Quote:', newQuote);

    } catch (error) {
      console.log('Error using QuoteDatabase:', error);
    }
  }

    return (
      <Display>
        <Form navigation={navigation} newQuoteHandler={newQuoteHandler}/>
      </Display>
    );
};

export default NewQuote;