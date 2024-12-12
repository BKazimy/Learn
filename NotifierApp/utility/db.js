import AsyncStorage from '@react-native-async-storage/async-storage';
import Entries from './data';

class QuoteDatabase {
  constructor() {
    this.storageKey = 'quotes';
    this.autoIncrementKey = 'quote_auto_id';
    this.initializeDatabase();
  }

  /**
   * Initialize the database with some default quotes if empty
   */
  async initializeDatabase() {
    try {
      const quotes = await this.getAll();
      if (quotes.length === 0) {
        // If the database is empty, add the initial quotes
        for (const quoteData of Entries) {
          await this.add(quoteData);
        }
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  /**
   * Generate an auto-incremented ID
   */
  async _generateId() {
    try {
      const currentId = await AsyncStorage.getItem(this.autoIncrementKey);
      const newId = currentId ? parseInt(currentId, 10) + 1 : 0;
      await AsyncStorage.setItem(this.autoIncrementKey, newId.toString());
      return newId;
    } catch (error) {
      console.error('Error generating ID:', error);
      return 1; // Default ID if something goes wrong
    }
  }

  /**
   * Get all quotes from storage
   */
  async getAll() {
    try {
      const jsonValue = await AsyncStorage.getItem(this.storageKey);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  /**
   * Add a new quote
   * @param {Object} quoteData - The quote object { quote, author, story }
   */
  async add(quoteData) {
    try {
      const quotes = await this.getAll();
      const newQuote = {
        id: await this._generateId(),
        ...quoteData,
      };
      quotes.push(newQuote);
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(quotes));
      return newQuote;
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }

  /**
   * Update an existing quote
   * @param {string} id - The ID of the quote to update
   * @param {Object} updatedData - The updated data { quote, author, story }
   */
  async update(id, updatedData) {
    try {
      const quotes = await this.getAll();
      const quoteIndex = quotes.findIndex((q) => q.id === id);
      if (quoteIndex !== -1) {
        quotes[quoteIndex] = { ...quotes[quoteIndex], ...updatedData };
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(quotes));
        return quotes[quoteIndex];
      } else {
        throw new Error('Quote not found');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  /**
   * Delete a quote by ID
   * @param {string} id - The ID of the quote to delete
   */
  async delete(id) {
    try {
      const quotes = await this.getAll();
      const filteredQuotes = quotes.filter((q) => q.id !== id);
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(filteredQuotes));
      return filteredQuotes;
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  /**
   * Get a single quote by ID
   * @param {string} id - The ID of the quote to retrieve
   */
  async getById(id) {
    try {
      const quotes = await this.getAll();
      return quotes.find((q) => q.id === id) || null;
    } catch (error) {
      console.error('Error fetching quote by ID:', error);
      return null;
    }
  }

  /**
   * Get a random quote
   */
  async getRandom() {
    try {
      const quotes = await this.getAll();
      if (quotes.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    } catch (error) {
      console.error('Error fetching random quote:', error);
      return null;
    }
  }

  async SetQuoteOfDay() {
    try {
      let id = await this.getRandom();
      id = {id: id.id};
      // console.log('setquote id:', id);
      await AsyncStorage.setItem('today', JSON.stringify(id));
      return id;
    } catch (e) {
      console.log('Couldnt update quote of day!', e);
      return this.SetQuoteOfDay();
    }
  }

  async GetQuoteOfDay() {
    try {
      const jsonValue = await AsyncStorage.getItem('todya');
      console.log('jsonvalue:', jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : this.SetQuoteOfDay(); //this.SetQuoteOfDay();
    } catch(e) {
      console.log("Error occured!", e);
    }
  }
  // try {
  //   const jsonValue = await AsyncStorage.getItem(this.storageKey);
  //   return jsonValue != null ? JSON.parse(jsonValue) : [];
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  //   return [];
  // }
}

// Export an instance of the database class
const db = new QuoteDatabase();
export default db;
