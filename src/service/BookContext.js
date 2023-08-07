import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const BookContext = createContext();

export function useBook() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
    
const [books, setBooks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://book-e-sell-node-api.vercel.app/api/book/all");
      const data = await response.data;
      setBooks(data.result);
    }
    fetchData();
  })

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
