import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the ID
const QuoteContext = createContext();

// Create a provider component that will wrap the app or part of it
export const QuoteOfDay = ({ children }) => {
  // State to hold the id
  const [id, setId] = useState(1);

  // Function to update the id
  const updateId = (newId) => {
    setId(newId);
  };

  return (
    <QuoteContext.Provider value={{ id, updateId }}>
      {children}
    </QuoteContext.Provider>
  );
};

// Custom hook to use the context data
export const useIdContext = () => useContext(IdContext);
