import React from 'react';
import Form from '../components/form';
import Display from '../components/display';

// import { addQuote } from '../tools/db';
// import db from '../tools/db';

function NewQuote({ navigation, route }) {
  const { db } = route.params;

  async function newQuoteHandler(quote, author, story, source) {  
    try {
      const newentry = await db.add({
        quote: quote,
        author: author,
        story: story ? story : '',
        source: source
      });
      console.log('Added Quote:', newentry);

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