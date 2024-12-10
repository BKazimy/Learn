import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('quotes.db');

export const initDB = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY NOT NULL,
                quote TEXT NOT NULL,
                author TEXT NOT NULL,
                story TEXT NOT NULL
            );`
        );
    });
};

export const addQuote = (quote, author, story) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO quotes (quote, author, story) VALUES (?, ?, ?);',
            [quote, author, story]
        );
    });
};

export const getRandomQuote = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1;',
            [],
            (_, result) => callback(result.rows._array[0])
        );
    });
};
